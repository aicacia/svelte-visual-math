<script lang="ts" context="module">
  const VEC2_0 = vec2.create();

  function getMouseWheelDirection(e: any) {
    if (typeof e.detail == "number" && e.detail !== 0) {
      if (e.detail > 0) {
        return -1;
      } else if (e.detail < 0) {
        return 1;
      }
    } else if (typeof e.wheelDelta === "number") {
      if (e.wheelDelta < 0) {
        return -1;
      } else if (e.wheelDelta > 0) {
        return 1;
      }
    }
    return undefined;
  }
</script>

<script lang="ts">
  import type { FullGestureState } from "@use-gesture/vanilla";
  import { DragGesture, WheelGesture } from "@use-gesture/vanilla";
  import { range } from "@aicacia/core";
  import { vec2, mat2d } from "gl-matrix";
  import {
    setCoordinateContext,
    setMapContext,
    setPanesContext,
    setScaleContext,
  } from "./math";
  import { writable } from "svelte/store";
  import { onMount } from "svelte";

  export let width: string | number = 500;
  export let height: string | number = 500;
  export let pan = true;
  export let zoom = true;
  export let xAxisExtent: vec2 = vec2.fromValues(-5.5, 5.5);
  export let yAxisExtent: vec2 = vec2.fromValues(-5.5, 5.5);

  let actualWidth: number = typeof width === "number" ? width : 500;
  let actualHeight: number = typeof height === "number" ? height : 500;
  $: desiredCssWidth = width === "auto" ? "100%" : `${width}px`;
  $: desiredCssHeight = height === "auto" ? "100%" : `${height}px`;

  $: {
    const aspect = actualWidth / actualHeight,
      halfZoomAmount = zoomAmount * 0.5,
      newZoomAmount = zoomAmount * aspect,
      halfNewZoomAmount = newZoomAmount * 0.5;

    xAxisExtent[0] = -halfNewZoomAmount;
    xAxisExtent[1] = halfNewZoomAmount;
    yAxisExtent[0] = -halfZoomAmount;
    yAxisExtent[1] = halfZoomAmount;
  }

  let zoomAmount = Math.min(
    xAxisExtent[1] - xAxisExtent[0],
    yAxisExtent[1] - yAxisExtent[0]
  );

  let offset = vec2.fromValues(0, 0);
  let min = vec2.fromValues(xAxisExtent[0], yAxisExtent[0]);
  let max = vec2.fromValues(xAxisExtent[1], yAxisExtent[1]);

  $: min = vec2.add(
    min,
    offset,
    vec2.set(VEC2_0, xAxisExtent[0], yAxisExtent[0])
  );
  $: max = vec2.add(
    max,
    offset,
    vec2.set(VEC2_0, xAxisExtent[1], yAxisExtent[1])
  );

  $: mapX = (x: number) => ((x - min[0]) / (max[0] - min[0])) * actualWidth;
  $: mapY = (y: number) => ((y - min[1]) / (max[1] - min[1])) * actualHeight;

  let span = vec2.create();
  $: span = vec2.sub(span, max, min);

  $: scaleX = (x: number) => (x / span[0]) * actualWidth;
  $: scaleY = (y: number) => (-y / span[1]) * actualHeight;
  $: unscaleX = (x: number) => (x / actualWidth) * xSpan;
  $: unscaleY = (y: number) => (-y / actualHeight) * ySpan;

  let pixelMatrix = mat2d.create();
  $: pixelMatrix = mat2d.fromScaling(
    pixelMatrix,
    vec2.set(VEC2_0, scaleX(1), scaleY(1))
  );

  let inversePixelMatrix = mat2d.create();
  $: inversePixelMatrix = mat2d.fromScaling(
    inversePixelMatrix,
    vec2.set(VEC2_0, unscaleX(1), unscaleY(1))
  );

  $: cssScale = `scale(${scaleX(1)} ${scaleY(1)})`;

  let base = 2;
  let xPanes: vec2[] = [];
  let yPanes: vec2[] = [];
  let xPaneRange = vec2.create();
  let yPaneRange = vec2.create();

  $: xSpan = max[0] - min[0];
  $: xStep = Math.pow(base, Math.round(Math.log10(xSpan) / Math.log10(base)));
  $: xLowerBound = Math.floor(min[0] / xStep) * xStep;
  $: xUpperBound = Math.ceil(max[0] / xStep) * xStep;
  $: xPanes = range(xLowerBound, xUpperBound, xStep)
    .iter()
    .map((xMin) => vec2.fromValues(xMin, xMin + xStep))
    .toArray();
  $: xPaneRange = vec2.set(xPaneRange, xLowerBound, xUpperBound);

  $: ySpan = max[1] - min[1];
  $: yStep = Math.pow(base, Math.round(Math.log10(ySpan) / Math.log10(base)));
  $: yLowerBound = Math.floor(min[0] / yStep) * yStep;
  $: yUpperBound = Math.ceil(max[0] / yStep) * yStep;
  $: yPanes = range(yLowerBound, yUpperBound, yStep)
    .iter()
    .map((yMin) => vec2.fromValues(yMin, yMin + yStep))
    .toArray();
  $: yPaneRange = vec2.set(yPaneRange, yLowerBound, yUpperBound);

  let panesContext = writable({
    xPanes,
    yPanes,
    xPaneRange,
    yPaneRange,
  });
  setPanesContext(panesContext);

  $: panesContext.set({
    xPanes,
    yPanes,
    xPaneRange,
    yPaneRange,
  });

  let coordinateContext = writable({
    min,
    max,
    width: actualWidth,
    height: actualHeight,
  });
  setCoordinateContext(coordinateContext);
  $: coordinateContext.set({
    min,
    max,
    width: actualWidth,
    height: actualHeight,
  });

  let scaleContext = writable({
    zoomAmount,
    scaleX,
    scaleY,
    span,
    pixelMatrix,
    inversePixelMatrix,
    cssScale,
  });
  setScaleContext(scaleContext);
  $: scaleContext.set({
    zoomAmount,
    scaleX,
    scaleY,
    span,
    pixelMatrix,
    inversePixelMatrix,
    cssScale,
  });

  let mapContext = writable({
    mapX,
    mapY,
  });
  setMapContext(mapContext);
  $: mapContext.set({
    mapX,
    mapY,
  });

  let element: HTMLDivElement;

  $: onDrag = (
    state: Omit<FullGestureState<"drag">, "event"> & {
      event: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent;
    }
  ) => {
    if (!pan) {
      return;
    }
    offset[0] =
      (-state.offset[0] / actualWidth) * (xAxisExtent[1] - xAxisExtent[0]);
    offset[1] =
      (-state.offset[1] / actualHeight) * (yAxisExtent[1] - yAxisExtent[0]);
  };

  $: onMouseWheel = (
    state: Omit<FullGestureState<"wheel">, "event"> & {
      event: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent;
    }
  ) => {
    if (!zoom || state.last) {
      return;
    }
    const wheelDirection = getMouseWheelDirection(state.event as WheelEvent);

    if (wheelDirection && (zoomAmount > 3 || wheelDirection < 0)) {
      xAxisExtent = vec2.set(
        xAxisExtent,
        xAxisExtent[0] + wheelDirection,
        xAxisExtent[1] - wheelDirection
      );
      yAxisExtent = vec2.set(
        yAxisExtent,
        yAxisExtent[0] + wheelDirection,
        yAxisExtent[1] - wheelDirection
      );
      zoomAmount = Math.min(
        xAxisExtent[1] - xAxisExtent[0],
        yAxisExtent[1] - yAxisExtent[0]
      );
    }
  };

  onMount(() => {
    const dragGesture = new DragGesture(element, onDrag),
      wheelGesture = new WheelGesture(element, onMouseWheel);

    return () => {
      dragGesture.destroy();
      wheelGesture.destroy();
    };
  });
</script>

<div
  bind:this={element}
  bind:offsetWidth={actualWidth}
  bind:offsetHeight={actualHeight}
  class="visual-math"
  style={`width: ${desiredCssWidth}; height: ${desiredCssHeight}`}
>
  <svg
    width={actualWidth}
    height={actualHeight}
    viewBox={`${-mapX(0)} ${-mapY(0)} ${actualWidth} ${actualHeight}`}
    preserveAspectRatio="xMidYMin"
    style={`width: ${width}; touch-action: ${pan ? "none" : "auto"};`}
  >
    <slot />
  </svg>
</div>

<style>
  .visual-math {
    display: block;
    background: var(--visual-math-bg);
    overflow: hidden;
    user-select: none;
    font-family: sans-serif;
    font-variant-numeric: tabular-nums;

    --visual-math-bg: #f1f1f1;
    --visual-math-fg: black;

    --visual-math-origin-color: var(--visual-math-fg);
    --visual-math-line-color: #555;
    --grid-line-subdivision-color: #222;

    --visual-math-red: #f10000;
    --visual-math-orange: #f18100;
    --visual-math-yellow: #f1f100;
    --visual-math-green: #00f181;
    --visual-math-blue: #0000f1;
    --visual-math-indigo: #8100f1;
    --visual-math-violet: #8100f1;
    --visual-math-pink: #f18181;
  }

  .visual-math text {
    fill: var(--visual-math-fg);
    cursor: default;
  }

  .visual-math path {
    stroke: var(--visual-math-fg);
  }

  .visual-math .draggable {
    transition: r 0.2s ease, stroke-width 0.2s ease;
    stroke-width: 1rem;
    cursor: grab;
    outline: 0 !important;

    color: hsl(0, 100%, 47%);
  }

  .visual-math .draggable:active {
    cursor: grabbing;
  }

  .visual-math .draggable:focus,
  .visual-math circle.draggable:hover,
  .visual-math circle.draggable.dragging {
    r: 0.9rem;
    stroke-width: 0;
  }
</style>

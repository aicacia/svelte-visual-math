<script lang="ts" context="module">
  const VEC2_0 = vec2.create();
</script>

<script lang="ts">
  import type { FullGestureState } from "@use-gesture/vanilla";
  import { DragGesture } from "@use-gesture/vanilla";
  import { mat2d, vec2 } from "gl-matrix";
  import { onMount } from "svelte";
  import { getScaleContext } from "./math";

  export let point: vec2 = vec2.create();
  export let color: string = "var(--visual-math-blue)";
  export let transform: mat2d = mat2d.create();
  export let constrain:
    | "horizontal"
    | "vertical"
    | ((position: vec2) => vec2)
    | undefined = undefined;

  let intialPoint = vec2.fromValues(point[0], point[1]);
  let constraintFunction = (point: vec2) => point;
  $: if (constrain === "horizontal") {
    constraintFunction = ([x, _y]) => [x, intialPoint[1]];
  } else if (constrain === "vertical") {
    constraintFunction = ([_x, y]) => [intialPoint[0], y];
  } else if (typeof constrain === "function") {
    constraintFunction = constrain;
  }

  point = constraintFunction(point);

  let scaleContext = getScaleContext();
  $: scaleX = $scaleContext.scaleX;
  $: scaleY = $scaleContext.scaleY;
  $: inversePixelMatrix = $scaleContext.inversePixelMatrix;
  let display = vec2.create();
  $: display = vec2.transformMat2d(display, point, transform);

  let inverseTransform = mat2d.create();
  $: inverseTransform = mat2d.invert(inverseTransform, transform);

  let element: SVGGElement;
  let startPoint = vec2.create();
  let dragging = false;

  $: onDrag = (
    state: Omit<FullGestureState<"drag">, "event"> & {
      event: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent;
    }
  ) => {
    state.event?.stopPropagation();
    dragging = state.down;
    const movement = vec2.transformMat2d(
      VEC2_0,
      state.movement,
      inversePixelMatrix
    );

    if (state.first) {
      startPoint = vec2.transformMat2d(startPoint, point, transform);
    }
    vec2.add(point, startPoint, movement);
    vec2.transformMat2d(point, point, inverseTransform);
    point = constraintFunction(point);
  };

  onMount(() => {
    const dragGesture = new DragGesture(element, onDrag);

    return () => {
      dragGesture.destroy();
    };
  });
</script>

<g bind:this={element}>
  <circle
    cx={scaleX(display[0])}
    cy={scaleY(display[1])}
    r={30}
    fill="transparent"
  />
  <circle
    cx={scaleX(display[0])}
    cy={scaleY(display[1])}
    r={6}
    fill={color}
    stroke={color}
    stroke-opacity={0.25}
    class:draggable={dragging}
    tabIndex={0}
  />
</g>

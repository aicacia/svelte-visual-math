<script lang="ts">
  import { vec2 } from "gl-matrix";
  import { getScaleContext } from "./math";

  export let center: vec2 = vec2.fromValues(0, 0);
  export let radius: vec2 = vec2.fromValues(1, 1);
  export let angle: number = 0;
  export let strokeStyle: string = "solid";
  export let strokeOpacity: number = 1.0;
  export let weight: number = 2;
  export let color: string = "var(--visual-math-fg)";
  export let fillOpacity: number = 0.15;

  let scaleContext = getScaleContext();
  $: cssScale = $scaleContext.cssScale;
  $: rotate = `rotate(${(angle * 180) / Math.PI} ${center[0]} ${center[1]})`;
</script>

<ellipse
  cx={center[0]}
  cy={center[1]}
  rx={Math.abs(radius[0])}
  ry={Math.abs(radius[1])}
  stroke-width={weight}
  stroke-dasharray={strokeStyle === "dashed" ? "4,3" : undefined}
  transform={`${cssScale} ${rotate}`}
  {...$$restProps}
  style={`
    stroke: ${color};
    fill: ${color};
    fill-opacity: ${fillOpacity};
    stroke-opacity: ${strokeOpacity};
    ${$$restProps.style || ""}
  `}
/>

<style>
  ellipse {
    vector-effect: non-scaling-stroke;
  }
</style>

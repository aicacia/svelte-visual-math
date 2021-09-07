<script lang="ts">
  import { vec2 } from "gl-matrix";
  import { getScaleContext } from "./math";

  export let point: vec2 = vec2.create();
  export let color: string = "var(--visual-math-fg)";
  export let opacity = 1;

  const scaleContext = getScaleContext();
  $: scaleX = $scaleContext.scaleX;
  $: scaleY = $scaleContext.scaleY;
</script>

<circle
  cx={scaleX(point[0])}
  cy={scaleY(point[1])}
  r={6}
  {...$$restProps}
  style={`fill: ${color}; opacity: ${opacity}; ${$$restProps.style}`}
/>

<script lang="ts" context="module">
  const VEC2_0 = vec2.create();
</script>

<script lang="ts">
  import { vec2 } from "gl-matrix";
  import { getScaleContext } from "./math";

  export let point1: vec2 = vec2.create();
  export let point2: vec2 = vec2.create();
  export let color = "var(--visual-math-fg)";
  export let style = "solid";
  export let weight = 2;
  export let opacity = 1;

  const scaleContext = getScaleContext();
  $: pixelMatrix = $scaleContext.pixelMatrix;
  let segment = vec2.create();
  $: segment = vec2.scale(
    segment,
    vec2.normalize(segment, vec2.sub(VEC2_0, point2, point1)),
    100000
  );

  let scaledPoint1 = vec2.create();
  let scaledPoint2 = vec2.create();
  $: scaledPoint1 = vec2.transformMat2d(
    scaledPoint1,
    vec2.sub(VEC2_0, point1, segment),
    pixelMatrix
  );
  $: scaledPoint2 = vec2.transformMat2d(
    scaledPoint2,
    vec2.add(VEC2_0, point2, segment),
    pixelMatrix
  );
</script>

<line
  x1={scaledPoint1[0]}
  y1={scaledPoint1[1]}
  x2={scaledPoint2[0]}
  y2={scaledPoint2[1]}
  style={`stroke: ${color}`}
  stroke-width={weight}
  {opacity}
  stroke-dasharray={style === "dashed" ? "4,3" : undefined}
/>

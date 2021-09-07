<script lang="ts" context="module">
  const VEC2_0 = vec2.create();
  const ZERO = vec2.create();
  const RIGHT = vec2.fromValues(1, 0);
</script>

<script lang="ts">
  import { vec2 } from "gl-matrix";
  import ThroughPoints from "./ThroughPoints.svelte";

  export let point: vec2 = vec2.create();
  export let angle = 0;
  export let color = "var(--visual-math-fg)";
  export let style = "solid";
  export let weight = 2;
  export let opacity = 1;

  let point2 = vec2.create();
  $: point2 = vec2.add(point2, point, vec2.rotate(VEC2_0, RIGHT, ZERO, angle));
</script>

<ThroughPoints point1={point} {point2} {color} {opacity} {style} {weight} />

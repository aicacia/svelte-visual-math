<script lang="ts">
  import { vec2 } from "gl-matrix";
  import PointAngle from "./PointAngle.svelte";

  export let point: vec2 = vec2.create();
  export let slope = 0;
  export let color = "var(--visual-math-fg)";
  export let style = "solid";
  export let weight = 2;
  export let opacity = 1;

  let angle = Math.atan(slope);
  $: angle = Math.atan(slope);
</script>

<PointAngle {point} {angle} {color} {opacity} {style} {weight} />

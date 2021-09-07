<script lang="ts">
  import { vec2 } from "gl-matrix";
  import Ellipse from "./Ellipse.svelte";

  export let center: vec2 = vec2.fromValues(0, 0);
  export let radius: number = 1;
  export let angle: number = 0;
  export let strokeStyle: string = "solid";
  export let strokeOpacity: number = 1.0;
  export let weight: number = 2;
  export let color: string = "var(--visual-math-fg)";
  export let fillOpacity: number = 0.15;

  let ellipseRadius = vec2.fromValues(radius, radius);
  $: ellipseRadius = vec2.set(ellipseRadius, radius, radius);
</script>

<Ellipse
  {center}
  radius={ellipseRadius}
  {angle}
  {strokeStyle}
  {strokeOpacity}
  {weight}
  {color}
  {fillOpacity}
  {...$$restProps}
/>

<script lang="ts">
  import type { ILabelMaker } from "./math";
  import { snappedRange, getPanesContext, getScaleContext } from "./math";

  export let separation: number;
  export let labelMaker: ILabelMaker | false;

  let scaleContext = getScaleContext();
  let panesContext = getPanesContext();

  $: scaleX = $scaleContext.scaleX;
  $: xPanes = $panesContext.xPanes;

  $: xs = snappedRange(
    xPanes[0][0] - separation,
    xPanes[xPanes.length - 1][1] + separation,
    separation
  ).filter((x) => Math.abs(scaleX(x) - scaleX(0)) > 1);
</script>

<g>
  {#each xs as x}
    <text x={scaleX(x)} y={5} alignment-baseline="hanging" text-anchor="middle">
      {labelMaker ? labelMaker(x) : x}
    </text>
  {/each}
</g>

<style>
  g {
    paint-order: stroke;
    stroke-width: 3px;
    stroke: var(--visual-math-line-color);
    stroke-opacity: 0.75;
  }
</style>

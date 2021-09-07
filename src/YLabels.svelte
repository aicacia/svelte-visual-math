<script lang="ts">
  import type { ILabelMaker } from "./math";
  import { snappedRange, getPanesContext, getScaleContext } from "./math";

  export let separation: number;
  export let labelMaker: ILabelMaker | false;

  let scaleContext = getScaleContext();
  let panesContext = getPanesContext();

  $: scaleY = $scaleContext.scaleY;
  $: yPanes = $panesContext.yPanes;

  $: ys = snappedRange(
    yPanes[0][0] - separation,
    yPanes[yPanes.length - 1][1] + separation,
    separation
  ).filter((y) => Math.abs(scaleY(y) - scaleY(0)) > 1);
</script>

<g>
  {#each ys as y}
    <text x={5} y={scaleY(y)} alignment-baseline="central">
      {labelMaker ? labelMaker(y) : y}
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

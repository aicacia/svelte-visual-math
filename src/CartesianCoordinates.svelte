<script lang="ts" context="module">
  let incrementer = 0;

  const defaultAxisOptions: Partial<IAxisOptions> = {
    axis: true,
    lines: 1,
    labels: (x) => x,
  };
</script>

<script lang="ts">
  import type { IAxisOptions } from "./math";
  import XLabels from "./XLabels.svelte";
  import YLabels from "./YLabels.svelte";
  import GridPattern from "./GridPattern.svelte";

  export let subdivisions: number | false = false;
  export let xAxis: Partial<IAxisOptions> = {
    subdivisions,
    ...defaultAxisOptions,
  };
  export let yAxis: Partial<IAxisOptions> = {
    subdivisions,
    ...defaultAxisOptions,
  };

  $: xAxisOptions = {
    subdivisions,
    ...defaultAxisOptions,
    ...xAxis,
  } as IAxisOptions;
  $: yAxisOptions = {
    subdivisions,
    ...defaultAxisOptions,
    ...yAxis,
  } as IAxisOptions;

  const id = `visual-math-grid-${incrementer++}`;
</script>

<defs>
  <GridPattern
    {id}
    xLines={xAxisOptions.lines}
    yLines={yAxisOptions.lines}
    xSubdivisions={xAxisOptions.subdivisions}
    ySubdivisions={yAxisOptions.subdivisions}
  />
</defs>

<rect
  fill={`url(#${id})`}
  x={-10000000}
  y={-10000000}
  width={20000000}
  height={20000000}
/>

{#if xAxis.labels}
  <XLabels
    labelMaker={xAxisOptions.labels}
    separation={xAxisOptions.lines || 1}
  />
{/if}
{#if yAxis.labels}
  <YLabels
    labelMaker={yAxisOptions.labels}
    separation={yAxisOptions.lines || 1}
  />
{/if}

{#if xAxisOptions.axis}
  <line
    x1={-10000000}
    x2={10000000}
    y1={0}
    y2={0}
    class="transform-y-to-center"
  />
{/if}

{#if yAxisOptions.axis}
  <line
    x1={0}
    x2={0}
    y1={-10000000}
    y2={10000000}
    class="transform-x-to-center"
  />
{/if}

<style>
  line {
    stroke: var(--visual-math-origin-color);
  }
</style>

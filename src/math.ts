import { range } from "@aicacia/core";
import type { mat2d, vec2 } from "gl-matrix";
import { getContext, setContext } from "svelte";
import type { Readable } from "svelte/store";

export type ILabelMaker = (value: number) => number | string;

export interface IAxisOptions {
  axis: boolean;
  lines: number | false;
  subdivisions: number | false;
  labels: false | ILabelMaker;
}

const SCALE_CONTEXT_KEY = {};
export interface IScaleContext {
  zoomAmount: number;
  scaleX: (x: number) => number;
  scaleY: (y: number) => number;
  span: vec2;
  pixelMatrix: mat2d;
  inversePixelMatrix: mat2d;
  cssScale: string;
}
export function getScaleContext() {
  return getContext<Readable<IScaleContext>>(SCALE_CONTEXT_KEY);
}
export function setScaleContext(context: Readable<IScaleContext>) {
  setContext(SCALE_CONTEXT_KEY, context);
}

const COORDINATE_CONTEXT_KEY = {};
export interface ICoordinateContext {
  min: vec2;
  max: vec2;
  width: number;
  height: number;
}
export function getCoordinateContext() {
  return getContext<Readable<ICoordinateContext>>(COORDINATE_CONTEXT_KEY);
}
export function setCoordinateContext(context: Readable<ICoordinateContext>) {
  setContext(COORDINATE_CONTEXT_KEY, context);
}

const MAP_CONTEXT_KEY = {};
export interface IMapContext {
  mapX(x: number): number;
  mapY(y: number): number;
}
export function getMapContext() {
  return getContext<Readable<IMapContext>>(MAP_CONTEXT_KEY);
}
export function setMapContext(context: Readable<IMapContext>) {
  setContext(MAP_CONTEXT_KEY, context);
}

const PANES_CONTEXT_KEY = {};
export interface IPanesContext {
  xPanes: vec2[];
  yPanes: vec2[];
  xPaneRange: vec2;
  yPaneRange: vec2;
}
export function getPanesContext() {
  return getContext<Readable<IPanesContext>>(PANES_CONTEXT_KEY);
}
export function setPanesContext(context: Readable<IPanesContext>) {
  setContext(PANES_CONTEXT_KEY, context);
}

export function snappedRange(min: number, max: number, step: number) {
  return range(
    Math.floor(min / step) * step,
    Math.ceil(max / step) * step,
    step
  )
    .iter()
    .toArray();
}

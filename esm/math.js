import { range } from '@aicacia/core';
import { getContext, setContext } from 'svelte';

const SCALE_CONTEXT_KEY = {};
function getScaleContext() {
    return getContext(SCALE_CONTEXT_KEY);
}
function setScaleContext(context) {
    setContext(SCALE_CONTEXT_KEY, context);
}
const COORDINATE_CONTEXT_KEY = {};
function getCoordinateContext() {
    return getContext(COORDINATE_CONTEXT_KEY);
}
function setCoordinateContext(context) {
    setContext(COORDINATE_CONTEXT_KEY, context);
}
const MAP_CONTEXT_KEY = {};
function getMapContext() {
    return getContext(MAP_CONTEXT_KEY);
}
function setMapContext(context) {
    setContext(MAP_CONTEXT_KEY, context);
}
const PANES_CONTEXT_KEY = {};
function getPanesContext() {
    return getContext(PANES_CONTEXT_KEY);
}
function setPanesContext(context) {
    setContext(PANES_CONTEXT_KEY, context);
}
function snappedRange(min, max, step) {
    return range(Math.floor(min / step) * step, Math.ceil(max / step) * step, step)
        .iter()
        .toArray();
}

export { getCoordinateContext, getMapContext, getPanesContext, getScaleContext, setCoordinateContext, setMapContext, setPanesContext, setScaleContext, snappedRange };
//# sourceMappingURL=math.js.map

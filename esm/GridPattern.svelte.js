import { SvelteComponent, init, safe_not_equal, flush, svg_element, attr, insert, detach, empty, append, noop, destroy_each, component_subscribe } from 'svelte/internal';
import { range } from '@aicacia/core';
import { getScaleContext } from './math.js';

/* src/GridPattern.svelte generated by Svelte v3.42.4 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[13] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[16] = list[i];
	return child_ctx;
}

// (30:2) {#each xs as x}
function create_each_block_1(ctx) {
	let line;
	let line_x__value;
	let line_y__value;
	let line_x__value_1;
	let line_style_value;

	return {
		c() {
			line = svg_element("line");
			attr(line, "x1", line_x__value = /*x*/ ctx[16]);
			attr(line, "y1", line_y__value = 0);
			attr(line, "x2", line_x__value_1 = /*x*/ ctx[16]);
			attr(line, "y2", /*height*/ ctx[3]);
			attr(line, "style", line_style_value = `stroke: var(--grid-line-subdivision-color)`);
		},
		m(target, anchor) {
			insert(target, line, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*xs*/ 32 && line_x__value !== (line_x__value = /*x*/ ctx[16])) {
				attr(line, "x1", line_x__value);
			}

			if (dirty & /*xs*/ 32 && line_x__value_1 !== (line_x__value_1 = /*x*/ ctx[16])) {
				attr(line, "x2", line_x__value_1);
			}

			if (dirty & /*height*/ 8) {
				attr(line, "y2", /*height*/ ctx[3]);
			}
		},
		d(detaching) {
			if (detaching) detach(line);
		}
	};
}

// (39:2) {#each ys as y}
function create_each_block(ctx) {
	let line;
	let line_y__value;
	let line_x__value;
	let line_y__value_1;
	let line_style_value;

	return {
		c() {
			line = svg_element("line");
			attr(line, "y1", line_y__value = /*y*/ ctx[13]);
			attr(line, "x1", line_x__value = 0);
			attr(line, "y2", line_y__value_1 = /*y*/ ctx[13]);
			attr(line, "x2", /*width*/ ctx[4]);
			attr(line, "style", line_style_value = `stroke: var(--grid-line-subdivision-color)`);
		},
		m(target, anchor) {
			insert(target, line, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*ys*/ 64 && line_y__value !== (line_y__value = /*y*/ ctx[13])) {
				attr(line, "y1", line_y__value);
			}

			if (dirty & /*ys*/ 64 && line_y__value_1 !== (line_y__value_1 = /*y*/ ctx[13])) {
				attr(line, "y2", line_y__value_1);
			}

			if (dirty & /*width*/ 16) {
				attr(line, "x2", /*width*/ ctx[4]);
			}
		},
		d(detaching) {
			if (detaching) detach(line);
		}
	};
}

// (49:2) {#if xLines}
function create_if_block_1(ctx) {
	let line0;
	let line0_x__value;
	let line0_y__value;
	let line0_x__value_1;
	let line0_style_value;
	let line1;
	let line1_y__value;
	let line1_style_value;

	return {
		c() {
			line0 = svg_element("line");
			line1 = svg_element("line");
			attr(line0, "x1", line0_x__value = 0);
			attr(line0, "y1", line0_y__value = 0);
			attr(line0, "x2", line0_x__value_1 = 0);
			attr(line0, "y2", /*height*/ ctx[3]);
			attr(line0, "style", line0_style_value = `stroke: var(--visual-math-line-color)`);
			attr(line1, "x1", /*width*/ ctx[4]);
			attr(line1, "y1", line1_y__value = 0);
			attr(line1, "x2", /*width*/ ctx[4]);
			attr(line1, "y2", /*height*/ ctx[3]);
			attr(line1, "style", line1_style_value = `stroke: var(--visual-math-line-color)`);
		},
		m(target, anchor) {
			insert(target, line0, anchor);
			insert(target, line1, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*height*/ 8) {
				attr(line0, "y2", /*height*/ ctx[3]);
			}

			if (dirty & /*width*/ 16) {
				attr(line1, "x1", /*width*/ ctx[4]);
			}

			if (dirty & /*width*/ 16) {
				attr(line1, "x2", /*width*/ ctx[4]);
			}

			if (dirty & /*height*/ 8) {
				attr(line1, "y2", /*height*/ ctx[3]);
			}
		},
		d(detaching) {
			if (detaching) detach(line0);
			if (detaching) detach(line1);
		}
	};
}

// (65:2) {#if yLines}
function create_if_block(ctx) {
	let line0;
	let line0_x__value;
	let line0_y__value;
	let line0_y__value_1;
	let line0_style_value;
	let line1;
	let line1_x__value;
	let line1_style_value;

	return {
		c() {
			line0 = svg_element("line");
			line1 = svg_element("line");
			attr(line0, "x1", line0_x__value = 0);
			attr(line0, "y1", line0_y__value = 0);
			attr(line0, "x2", /*width*/ ctx[4]);
			attr(line0, "y2", line0_y__value_1 = 0);
			attr(line0, "style", line0_style_value = `stroke: var(--visual-math-line-color)`);
			attr(line1, "x1", line1_x__value = 0);
			attr(line1, "y1", /*height*/ ctx[3]);
			attr(line1, "x2", /*width*/ ctx[4]);
			attr(line1, "y2", /*height*/ ctx[3]);
			attr(line1, "style", line1_style_value = `stroke: var(--visual-math-line-color)`);
		},
		m(target, anchor) {
			insert(target, line0, anchor);
			insert(target, line1, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*width*/ 16) {
				attr(line0, "x2", /*width*/ ctx[4]);
			}

			if (dirty & /*height*/ 8) {
				attr(line1, "y1", /*height*/ ctx[3]);
			}

			if (dirty & /*width*/ 16) {
				attr(line1, "x2", /*width*/ ctx[4]);
			}

			if (dirty & /*height*/ 8) {
				attr(line1, "y2", /*height*/ ctx[3]);
			}
		},
		d(detaching) {
			if (detaching) detach(line0);
			if (detaching) detach(line1);
		}
	};
}

function create_fragment(ctx) {
	let pattern;
	let each0_anchor;
	let each1_anchor;
	let if_block0_anchor;
	let each_value_1 = /*xs*/ ctx[5];
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let each_value = /*ys*/ ctx[6];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	let if_block0 = /*xLines*/ ctx[1] && create_if_block_1(ctx);
	let if_block1 = /*yLines*/ ctx[2] && create_if_block(ctx);

	return {
		c() {
			pattern = svg_element("pattern");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			each0_anchor = empty();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each1_anchor = empty();
			if (if_block0) if_block0.c();
			if_block0_anchor = empty();
			if (if_block1) if_block1.c();
			attr(pattern, "id", /*id*/ ctx[0]);
			attr(pattern, "x", "0");
			attr(pattern, "y", "0");
			attr(pattern, "width", /*width*/ ctx[4]);
			attr(pattern, "height", /*height*/ ctx[3]);
			attr(pattern, "patternUnits", "userSpaceOnUse");
		},
		m(target, anchor) {
			insert(target, pattern, anchor);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(pattern, null);
			}

			append(pattern, each0_anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(pattern, null);
			}

			append(pattern, each1_anchor);
			if (if_block0) if_block0.m(pattern, null);
			append(pattern, if_block0_anchor);
			if (if_block1) if_block1.m(pattern, null);
		},
		p(ctx, [dirty]) {
			if (dirty & /*xs, height*/ 40) {
				each_value_1 = /*xs*/ ctx[5];
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(pattern, each0_anchor);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_1.length;
			}

			if (dirty & /*ys, width*/ 80) {
				each_value = /*ys*/ ctx[6];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(pattern, each1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (/*xLines*/ ctx[1]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					if_block0.m(pattern, if_block0_anchor);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*yLines*/ ctx[2]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(pattern, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (dirty & /*id*/ 1) {
				attr(pattern, "id", /*id*/ ctx[0]);
			}

			if (dirty & /*width*/ 16) {
				attr(pattern, "width", /*width*/ ctx[4]);
			}

			if (dirty & /*height*/ 8) {
				attr(pattern, "height", /*height*/ ctx[3]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(pattern);
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let scaleX;
	let scaleY;
	let width;
	let height;
	let $context;
	let { id } = $$props;
	let { xLines = 1 } = $$props;
	let { yLines = 1 } = $$props;
	let { xSubdivisions = 1 } = $$props;
	let { ySubdivisions = 1 } = $$props;
	let context = getScaleContext();
	component_subscribe($$self, context, value => $$invalidate(12, $context = value));
	let xs = [];
	let ys = [];

	$$self.$$set = $$props => {
		if ('id' in $$props) $$invalidate(0, id = $$props.id);
		if ('xLines' in $$props) $$invalidate(1, xLines = $$props.xLines);
		if ('yLines' in $$props) $$invalidate(2, yLines = $$props.yLines);
		if ('xSubdivisions' in $$props) $$invalidate(8, xSubdivisions = $$props.xSubdivisions);
		if ('ySubdivisions' in $$props) $$invalidate(9, ySubdivisions = $$props.ySubdivisions);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$context*/ 4096) {
			$$invalidate(11, scaleX = $context.scaleX);
		}

		if ($$self.$$.dirty & /*$context*/ 4096) {
			$$invalidate(10, scaleY = $context.scaleY);
		}

		if ($$self.$$.dirty & /*scaleX, xLines*/ 2050) {
			$$invalidate(4, width = scaleX(xLines || 1));
		}

		if ($$self.$$.dirty & /*scaleY, yLines*/ 1028) {
			$$invalidate(3, height = -scaleY(yLines || 1));
		}

		if ($$self.$$.dirty & /*xSubdivisions, width*/ 272) {
			if (xSubdivisions && xSubdivisions > 1) {
				const pixelXDistance = width / xSubdivisions;
				$$invalidate(5, xs = range(0, width + pixelXDistance * 1.1, pixelXDistance).iter().toArray());
			}
		}

		if ($$self.$$.dirty & /*ySubdivisions, height*/ 520) {
			if (ySubdivisions && ySubdivisions > 1) {
				const pixelYDistance = height / ySubdivisions;
				$$invalidate(6, ys = range(0, height + pixelYDistance * 1.1, pixelYDistance).iter().toArray());
			}
		}
	};

	return [
		id,
		xLines,
		yLines,
		height,
		width,
		xs,
		ys,
		context,
		xSubdivisions,
		ySubdivisions,
		scaleY,
		scaleX,
		$context
	];
}

class GridPattern extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			id: 0,
			xLines: 1,
			yLines: 2,
			xSubdivisions: 8,
			ySubdivisions: 9
		});
	}

	get id() {
		return this.$$.ctx[0];
	}

	set id(id) {
		this.$$set({ id });
		flush();
	}

	get xLines() {
		return this.$$.ctx[1];
	}

	set xLines(xLines) {
		this.$$set({ xLines });
		flush();
	}

	get yLines() {
		return this.$$.ctx[2];
	}

	set yLines(yLines) {
		this.$$set({ yLines });
		flush();
	}

	get xSubdivisions() {
		return this.$$.ctx[8];
	}

	set xSubdivisions(xSubdivisions) {
		this.$$set({ xSubdivisions });
		flush();
	}

	get ySubdivisions() {
		return this.$$.ctx[9];
	}

	set ySubdivisions(ySubdivisions) {
		this.$$set({ ySubdivisions });
		flush();
	}
}

export { GridPattern as default };
//# sourceMappingURL=GridPattern.svelte.js.map

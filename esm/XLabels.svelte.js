import { SvelteComponent, init, safe_not_equal, flush, append_styles, svg_element, text, attr, insert, append, set_data, detach, noop, destroy_each, component_subscribe } from 'svelte/internal';
import { getScaleContext, getPanesContext, snappedRange } from './math.js';

/* src/XLabels.svelte generated by Svelte v3.42.4 */

function add_css(target) {
	append_styles(target, "svelte-133qdtd", "g.svelte-133qdtd{paint-order:stroke;stroke-width:3px;stroke:var(--visual-math-line-color);stroke-opacity:0.75}");
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (12:2) {#each xs as x}
function create_each_block(ctx) {
	let text_1;

	let t_value = (/*labelMaker*/ ctx[0]
	? /*labelMaker*/ ctx[0](/*x*/ ctx[9])
	: /*x*/ ctx[9]) + "";

	let t;
	let text_1_x_value;
	let text_1_y_value;

	return {
		c() {
			text_1 = svg_element("text");
			t = text(t_value);
			attr(text_1, "x", text_1_x_value = /*scaleX*/ ctx[1](/*x*/ ctx[9]));
			attr(text_1, "y", text_1_y_value = 5);
			attr(text_1, "alignment-baseline", "hanging");
			attr(text_1, "text-anchor", "middle");
		},
		m(target, anchor) {
			insert(target, text_1, anchor);
			append(text_1, t);
		},
		p(ctx, dirty) {
			if (dirty & /*labelMaker, xs*/ 5 && t_value !== (t_value = (/*labelMaker*/ ctx[0]
			? /*labelMaker*/ ctx[0](/*x*/ ctx[9])
			: /*x*/ ctx[9]) + "")) set_data(t, t_value);

			if (dirty & /*scaleX, xs*/ 6 && text_1_x_value !== (text_1_x_value = /*scaleX*/ ctx[1](/*x*/ ctx[9]))) {
				attr(text_1, "x", text_1_x_value);
			}
		},
		d(detaching) {
			if (detaching) detach(text_1);
		}
	};
}

function create_fragment(ctx) {
	let g;
	let each_value = /*xs*/ ctx[2];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			g = svg_element("g");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr(g, "class", "svelte-133qdtd");
		},
		m(target, anchor) {
			insert(target, g, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(g, null);
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*scaleX, xs, labelMaker*/ 7) {
				each_value = /*xs*/ ctx[2];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(g, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(g);
			destroy_each(each_blocks, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let scaleX;
	let xPanes;
	let xs;
	let $panesContext;
	let $scaleContext;
	let { separation } = $$props;
	let { labelMaker } = $$props;
	let scaleContext = getScaleContext();
	component_subscribe($$self, scaleContext, value => $$invalidate(8, $scaleContext = value));
	let panesContext = getPanesContext();
	component_subscribe($$self, panesContext, value => $$invalidate(7, $panesContext = value));

	$$self.$$set = $$props => {
		if ('separation' in $$props) $$invalidate(5, separation = $$props.separation);
		if ('labelMaker' in $$props) $$invalidate(0, labelMaker = $$props.labelMaker);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$scaleContext*/ 256) {
			$$invalidate(1, scaleX = $scaleContext.scaleX);
		}

		if ($$self.$$.dirty & /*$panesContext*/ 128) {
			$$invalidate(6, xPanes = $panesContext.xPanes);
		}

		if ($$self.$$.dirty & /*xPanes, separation, scaleX*/ 98) {
			$$invalidate(2, xs = snappedRange(xPanes[0][0] - separation, xPanes[xPanes.length - 1][1] + separation, separation).filter(x => Math.abs(scaleX(x) - scaleX(0)) > 1));
		}
	};

	return [
		labelMaker,
		scaleX,
		xs,
		scaleContext,
		panesContext,
		separation,
		xPanes,
		$panesContext,
		$scaleContext
	];
}

class XLabels extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { separation: 5, labelMaker: 0 }, add_css);
	}

	get separation() {
		return this.$$.ctx[5];
	}

	set separation(separation) {
		this.$$set({ separation });
		flush();
	}

	get labelMaker() {
		return this.$$.ctx[0];
	}

	set labelMaker(labelMaker) {
		this.$$set({ labelMaker });
		flush();
	}
}

export { XLabels as default };
//# sourceMappingURL=XLabels.svelte.js.map

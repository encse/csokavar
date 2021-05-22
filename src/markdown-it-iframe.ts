import StateInline from 'markdown-it/lib/rules_inline/state_inline';
import { iframe } from './iframe';

export default function markdown_it_iframe_plugin(md) {

  function process(state:StateInline, silent: boolean) {
    const rx = /\[iframe src="(.*)"\]/s;
    const slice: string = state.src.slice(state.pos, state.src.length)

    const m = slice.match(rx);
    if (!m) {
      return false;
    }

    state.pos += m[0].length;

    if (!silent) {
      iframe(state, m[1]);
    }

    return true;
  }

  md.inline.ruler.before("text", "iframe", process)
}

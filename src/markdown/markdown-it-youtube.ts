import StateInline from 'markdown-it/lib/rules_inline/state_inline';
import { iframe } from './iframe';
import MarkdownIt from 'markdown-it';

export default function plugin(md: MarkdownIt) {

  function process(state: StateInline, silent: boolean) {
    const rx = /\[youtube src="(.*)"\]/s;
    const slice: string = state.src.slice(state.pos, state.src.length)

    const m = slice.match(rx);
    if (!m) {
      return false;
    }

    state.pos += m[0].length;

    if (!silent) {
      const url = `https://www.youtube.com/embed/${m[1]}?feature=oembed`;
      iframe(state, url);
    }

    return true;
  }

  md.inline.ruler.before("text", "youtube", process)
}

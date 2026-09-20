const OPERATORS = new Set(['&&', '||', '|', ';']);

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Tokenize a shell one-liner into command / operator / flag / argument spans.
 * The spans carry no color of their own; `theme.css` styles them by weight and
 * scale step so the snippets stay monochrome.
 */
export function highlight(cmd: string): string {
  let atCommand = true;

  return cmd
    .split(' ')
    .map((tok) => {
      if (tok === '') return '';

      const esc = escapeHtml(tok);

      if (OPERATORS.has(tok)) {
        atCommand = true;
        return `<span class="sh-op">${esc}</span>`;
      }
      if (atCommand) {
        atCommand = false;
        return `<span class="sh-cmd">${esc}</span>`;
      }
      if (tok.startsWith('-')) return `<span class="sh-flag">${esc}</span>`;

      return `<span class="sh-arg">${esc}</span>`;
    })
    .join(' ');
}

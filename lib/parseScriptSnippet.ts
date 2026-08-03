export type ParsedScript = {
  src?: string;
  async?: boolean;
  content?: string;
};

/**
 * Splits a pasted tag-manager snippet (which may contain literal <script>
 * tags with a src, inline JS, and/or plain markup like <noscript>) into
 * renderable script descriptors plus any leftover non-script markup.
 */
export function parseScriptSnippet(snippet: string): {
  scripts: ParsedScript[];
  markup: string;
} {
  if (!snippet.trim()) {
    return { scripts: [], markup: "" };
  }

  const scriptRegex = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  const scripts: ParsedScript[] = [];
  let markup = snippet;
  let match: RegExpExecArray | null;

  while ((match = scriptRegex.exec(snippet)) !== null) {
    const attrs = match[1];
    const content = match[2].trim();
    const srcMatch = attrs.match(/src=["']([^"']+)["']/i);
    scripts.push({
      src: srcMatch?.[1],
      async: /\basync\b/i.test(attrs),
      content: content || undefined,
    });
    markup = markup.replace(match[0], "");
  }

  markup = markup.trim();

  // No literal <script> tags found (e.g. someone pasted bare JS) — treat the
  // whole snippet as one inline script's content.
  if (scripts.length === 0 && markup) {
    return { scripts: [{ content: markup }], markup: "" };
  }

  return { scripts, markup };
}

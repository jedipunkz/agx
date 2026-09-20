/**
 * Single source of content for the landing page. Components stay presentational
 * so copy changes never require touching layout or styles.
 */

export const REPO_URL = 'https://github.com/jedipunkz/agx';

export const INSTALL_COMMAND = 'brew tap jedipunkz/agx && brew install agx';

export const site = {
  name: 'agx',
  tagline: 'agent cross',
  title: 'agx — Run AI coding agents in parallel git worktrees',
  description:
    'agx is a CLI that runs Claude Code, Codex CLI, Gemini CLI, and OpenCode agents in parallel git worktrees, with a terminal dashboard to monitor, resume, and inspect every session.',
  screenshot: 'https://jedipunkz.rocks/pix/ax.png',
} as const;

export const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#reference', label: 'Reference' },
  { href: '#install', label: 'Install' },
] as const;

export const agents = [
  { name: 'Claude Code', flag: '-a claude', href: 'https://claude.ai/code' },
  { name: 'Codex CLI', flag: '-a codex', href: 'https://github.com/openai/codex' },
  { name: 'Gemini CLI', flag: '-a gemini', href: 'https://github.com/google-gemini/gemini-cli' },
  { name: 'OpenCode', flag: '-a opencode', href: 'https://opencode.ai/' },
] as const;

export const features = [
  {
    label: 'Dashboard',
    title: 'Watch every session from one terminal',
    desc: 'agx dash tracks running, waiting, successful, failed, and killed agents side by side. Open any session to read its log, or press d for a live unified diff of its worktree that refreshes while the agent works.',
    wide: true,
  },
  {
    label: 'Agents',
    title: 'One workflow, four runners',
    desc: 'Start Claude Code, Codex CLI, Gemini CLI, or OpenCode with the same command and pass runner-specific flags after --.',
    wide: false,
  },
  {
    label: 'Isolation',
    title: 'A worktree per agent',
    desc: 'Every session gets its own git worktree and agx/<id> branch, so parallel agents never touch each other or your main checkout.',
    wide: false,
  },
  {
    label: 'Control',
    title: 'Resume, revisit, and kill',
    desc: 'Reattach to a session by name or ID, drop into its worktree with a single command, or stop an agent that has gone astray.',
    wide: false,
  },
  {
    label: 'Scripting',
    title: 'Composable from the shell',
    desc: 'agx agent wait blocks until a session exits or pauses and forwards its exit code, so pipelines can chain on it and answer prompts with agx agent input.',
    wide: false,
  },
  {
    label: 'Logs',
    title: 'Stream or dump output',
    desc: 'Follow live output with logs -f while the daemon streams it, or dump the full log with ANSI escapes stripped.',
    wide: false,
  },
  {
    label: 'Cleanup',
    title: 'Worktrees that tidy themselves',
    desc: 'Finished sessions age out of the dashboard and their worktrees are removed on the schedule you set in ~/.agx/agx.yaml.',
    wide: false,
  },
] as const;

export const workflow = [
  {
    step: '01',
    title: 'Start inside a repository',
    cmd: 'cd /path/to/repo && agx agent new',
    desc: 'agx detects the current git repository and branches an isolated worktree for the new agent.',
  },
  {
    step: '02',
    title: 'Pick a runner and a branch name',
    cmd: 'agx agent new -a codex -n feat/foo',
    desc: 'Claude Code is the default. Use -a to choose another runner and -n to name the session and its branch.',
  },
  {
    step: '03',
    title: 'Open the dashboard',
    cmd: 'agx dash',
    desc: 'Monitor status, search sessions, copy worktree paths, read logs, and watch a live diff of what each agent changed.',
  },
  {
    step: '04',
    title: 'Follow the output',
    cmd: 'agx agent logs -f -n feat/foo',
    desc: 'Stream a session from any terminal. Drop -f to dump the whole log with ANSI escapes stripped.',
  },
  {
    step: '05',
    title: 'Block, then answer',
    cmd: 'agx agent wait -n feat/foo && ./deploy.sh',
    desc: 'wait exits when the session ends or pauses, so scripts can chain on it. Answer a paused agent with agx agent input.',
  },
  {
    step: '06',
    title: 'Resume or remove',
    cmd: 'agx agent resume -n feat/foo',
    desc: 'Reattach to earlier work, or run agx agent rm to drop a finished worktree, log, and state entry.',
  },
] as const;

export const commands = [
  { cmd: 'agx agent new', desc: 'Start an agent in a fresh worktree' },
  { cmd: 'agx agent resume', desc: 'Reattach to a session by name or ID' },
  { cmd: 'agx agent list', desc: 'List sessions with repo, status, and worktree' },
  { cmd: 'agx agent logs', desc: 'Dump or follow a session log' },
  { cmd: 'agx agent cd', desc: 'Open a shell in the session worktree' },
  { cmd: 'agx agent wait', desc: 'Block until a session exits or pauses' },
  { cmd: 'agx agent input', desc: 'Send input to a waiting agent' },
  { cmd: 'agx agent rm', desc: 'Remove a finished worktree, log, and state' },
  { cmd: 'agx dash', desc: 'Open the terminal dashboard' },
] as const;

export const keybindings = [
  { key: 'j / k', desc: 'Move through the session list' },
  { key: 'enter', desc: 'Open the selected session log' },
  { key: 'd', desc: 'Live diff of the session worktree' },
  { key: '/', desc: 'Search sessions by ID or name' },
  { key: 'o', desc: 'Toggle finished sessions' },
  { key: 'y', desc: 'Copy cd <worktree-path>' },
  { key: 'K', desc: 'Kill the selected agent' },
  { key: 'q', desc: 'Quit the dashboard' },
] as const;

export const statuses = [
  { name: 'running', desc: 'Actively processing' },
  { name: 'waiting', desc: 'Idle at a prompt' },
  { name: 'success', desc: 'Exited with code 0' },
  { name: 'failed', desc: 'Exited non-zero' },
  { name: 'killed', desc: 'Terminated by signal' },
] as const;

export const footerLinks = [
  { href: REPO_URL, label: 'GitHub' },
  { href: `${REPO_URL}/releases`, label: 'Releases' },
  { href: `${REPO_URL}/issues`, label: 'Issues' },
  { href: `${REPO_URL}/blob/main/README.md`, label: 'Docs' },
] as const;

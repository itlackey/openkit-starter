# OpenKit Starter Repo

Ship production-ready [OpenCode](https://opencode.ai) extensions as one npm package.

OpenKit gives you a clean packaging pattern for agents, commands, plugins, skills, tools, and themes. Add files to `opencode/`, publish once, and your users install with a single plugin entry.

OpenKit is built for teams publishing **OpenCode plugins** and **OpenCode extension packs** to npm.

## Why developers use OpenKit

- **One package, full extension surface**: ship commands, agents, skills, tools, plugins, and themes together.
- **Safe installs by default**: existing user files are preserved (`overwrite: false`).
- **Works with real plugin code**: use standalone installer mode or compose it into your own plugin.
- **Low maintenance**: no custom copy scripts or postinstall hacks.
- **CLI included**: add, remove, and search for openkit packages directly from the command line.

## Quick start

### 1) Create from template

Click **Use this template** on GitHub, then update `name` in `package.json` and `index.ts`.

### 2) Add extensions

Drop files into the matching subdirectory:
```
opencode/
├── agents/       # .md    — agent definitions (primary or subagent)
├── commands/     # .md    — slash commands
├── plugins/      # .ts    — full Plugin API
├── skills/       # SKILL.md in named folders
├── tools/        # .ts    — custom tools
└── themes/       # .json  — color themes
```
### 3) Publish to npm

Once you have added your files, run `npm publish --access public` to publish the package to npm.

## Included examples

| Extension | Type | Try it |
|---|---|---|
| `/hello` | Command | Slash command |
| `@example-agent` | Agent | Read-only code review subagent |
| `hello-skill` | Skill | Prompt template |
| `echo` | Tool | File-based custom tool |
| `greet` | Tool | Plugin-registered tool |
| `template-dark` | Theme | Dark color theme |

## Installer options

| Option | Required | Default | Description |
|---|---|---|---|
| `name` | yes | — | Label for log messages |
| `dirs` | no | all 6 types | Limit which subdirectories to install |
| `overwrite` | no | `false` | Overwrite existing files |
| `sourceUrl` | no | — | Pass `import.meta.url` |

## Publish checklist

Before running `npm publish`:

- Use a clear package name (`my-opencode-extension`) and concise description.
- Add searchable keywords like `opencode`, `opencode-plugin`, `opencode-extension`.
  - **Important:** Be sure to leave the `openkit` keywords to be included in openkit search results.
- Confirm `main`/`exports` point to compiled JS in `dist/` and `types` points to declarations.
- Ensure `files` includes everything users need (`dist`, `opencode`, etc).
- Test installation with a real `opencode.json` plugin entry in a sample project.


### package.json essentials

```json
{
  "name": "my-opencode-extension",
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "default": "./dist/index.js"
    }
  },
  "files": ["dist", "opencode"],
  "dependencies": {
    "@opencode-ai/plugin": "^1.2.10",
    "@itlackey/openkit": "^0.1.0"
  }
}
```

## Docs

- [Plugins](https://opencode.ai/docs/plugins/)
- [Commands](https://opencode.ai/docs/commands/)
- [Agents](https://opencode.ai/docs/agents/)
- [Agent Skills](https://opencode.ai/docs/skills/)
- [Custom tools](https://opencode.ai/docs/custom-tools/)
- [Themes](https://opencode.ai/docs/themes/)
- [Config](https://opencode.ai/docs/config/)

# research-graphql-github

A simple research of GraphQL features on the example of GitHub API v4.

## Setup

1. Install Node.js using [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) or manually (see [.nvmrc](./.nvmrc) for a version).
1. Install [Yarn](https://yarnpkg.com/getting-started/install#global-install) package manager.
1. Generate your [GitHub personal access token](https://github.com/settings/tokens) (*read:user, user:email*) and put it into `.env` file as `GITHUB_API_TOKEN`.

> This project prefers **Yarn** over **npm** to use features:
> - [Plug'n'Play](https://yarnpkg.com/features/pnp)
> - [Zero-Installs](https://yarnpkg.com/features/zero-installs)
>
> They make builds faster and code stabler by removing `node_modules/` directory and using interchangeable cache instead.
> No need to call `npm install` or `yarn` to download dependencies.
>
> Actually, please do not use **npm** at all as it recreates `node_modules/` directory and its own lockfile.

## Development

To run development server with hot reloading, use:

`yarn start`

To check types and lint code, use:

`yarn check`

For development inspiration, see [issues tracker](https://github.com/mrosinski/research-graphql-github/issues).

## Known issues

### Missing dependencies in libraries

Some libraries used in this project are awaiting next releases to fix their broken dependencies.

As a workaround, some peer dependencies were added explicitly to the project. These should be removed in the future:  
- tiny-warning
- react-is
- csstype

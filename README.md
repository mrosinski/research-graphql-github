# research-graphql-github

A simple research of GraphQL features on the example of GitHub API v4.

## Setup

1. Install Node.js using [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) or manually (see [.nvmrc](./.nvmrc) for a version).
1. Install [Yarn](https://yarnpkg.com/getting-started/install#global-install) package manager.
1. That's it! No need to call `yarn install` or download anything else.

> This project prefers **Yarn** over **npm** to use features:
> - [Plug'n'Play](https://yarnpkg.com/features/pnp)
> - [Zero-Installs](https://yarnpkg.com/features/zero-installs)
>
> They make builds faster and code stabler by removing `node_modules/` directory and using interchangeable cache instead.
>
> Please do not use **npm** as it recreates `node_modules/` directory!

## Development

To run development server with hot reloading, use:

`yarn start`

To lint code and fix errors, use:

`yarn eslint:fix`

To perform type checking, use:

`yarn typecheck`

# Node TypeScript starter

A Node.js TypeScript starter repository, featuring TypeScript for strong typing, Jest for testing, and automatic code formatting with Prettier at commit time.

## Features

- **TypeScript** for application logic, ensuring type safety and developer productivity.
- **Jest** for unit testing, with examples to get you started on testing your application logic.
- **Prettier** integration for consistent code formatting, automatically applied before commit.
- **Husky** and **lint-staged** for ensuring code quality and formatting standards are met pre-commit.

## Getting Started

### Prerequisites

- Node.js (v20 or newer recommended)
- npm (v10 or newer)

### Installation

1. Clone the repository:

```console
git clone https://github.com/yourusername/dapp-feb24.git
cd dapp-feb24
```

1. Install dependencies

```console
npm ci
```

## Run the project

```console
npm run dev
```

## Test

Run the tests to ensure everything is set up correctly:

```console
npm test
```

## Format code

Code formatting is automatically handled by Prettier upon commit. To manually format your code, run:

```console
npm test
```

## Add Commit Hooks

This project uses Husky to run lint-staged before each commit, ensuring that your code is automatically formatted. To set up Husky, run:

```console
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

## Contribute

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

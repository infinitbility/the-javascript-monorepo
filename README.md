# the-javascript-monorepo
The Javascript Monorepo

Follow below steps to setup the javascript monorepo example project, in this project we are used node.js, react.js javascript frameworks.

## Setup monorepo

Take git clone using below command

```bash
git clone https://github.com/infinitbility/the-javascript-monorepo.git
```

## Setup Utility project

In utility project, we have only some plain javascipt code i.e there are no need install node modules.

Just go to folder and enter `npm link` for make code shareable.

```bash
cd utility && npm link
```

## Setup sample-node project

- Install node packages.

```bash
npm install
```

- Install utility

```bash
npm link utility
```

- run node project

```bash
npm start
```

check your http://localhost:5000

## Steup sample react project

- Install node packages.

```bash
npm install
```

- Install utility

```bash
npm link utility
```

- run react project

```bash
npm start
```

I Hope, it's helpful for you.
# Running the TS Top up Examples

There is more than one way to do this. In keeping with week 1 and our talk about transpiling, you can use Babel to transpile your TypeScript code to JavaScript and then run it with Node.js. Here are the steps:

1. Install Babel CLI and Babel preset for TypeScript globally if you haven't done so already. You can do this using npm (Node.js package manager) with the following commands:

```bash
npm install --save-dev @babel/cli @babel/preset-typescript
```

2. Create a `.babelrc` file in your project root and add the TypeScript preset:

```bash
{
 "presets": ["@babel/preset-typescript"]
}
```

3. Compile your TypeScript file to JavaScript using the `babel` command:

```bash
npx babel 01_destructing.ts --out-file 01_destructing.js
```

This will create a new JavaScript file in the same directory with the same name (`01_destructing.js`).

4. Run the resulting JavaScript file using Node.js:

```bash
node 01_destructing.js
```

This will execute your code and display any console output.
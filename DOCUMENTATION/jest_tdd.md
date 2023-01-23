# Working with Jest for TDD
How to setup and run Jest TDD in npm

## Steps
- run `npm install jest@24.9.0 --save-dev`
add this to the package.json file
```
"scripts": {
  "build": "webpack --mode=development",
  "start": "npm run build && webpack-dev-server --open --mode=development",
  "lint": "eslint src/*.js",
  "test": "jest" 
}
```

to run this test use `npm run test`
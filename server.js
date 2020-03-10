console.log("Hello server side");

//import the games.js file
let games = require('./games.js');

console.log('game is:', games)// at this point demos error:
// Hello server side
// internal/modules/cjs/loader.js:983
//   throw err;
//   ^

// Error: Cannot find module 'games.js'
// Require stack:
// - /Users/tom/Documents/GitHub/node-intro/server.js
//     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:980:15)
//     at Function.Module._load (internal/modules/cjs/loader.js:862:27)
//     at Module.require (internal/modules/cjs/loader.js:1040:19)
//     at require (internal/modules/cjs/helpers.js:72:18)
//     at Object.<anonymous> (/Users/tom/Documents/GitHub/node-intro/server.js:4:13)
//     at Module._compile (internal/modules/cjs/loader.js:1151:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1171:10)
//     at Module.load (internal/modules/cjs/loader.js:1000:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:899:14)
//     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12) {
//   code: 'MODULE_NOT_FOUND',
//   requireStack: [ '/Users/tom/Documents/GitHub/node-intro/server.js' ]
// }

//M "Node is different from HTML, node looks in the node modules folder. you have to give it the directory too, e.g. ./games.js"

//S "can you talk more about module exports, is it global... will it always export this file?"

//S "can you explain..."  M "how that thought it'll come up this afternoon in Express into. Will pull in Express as a node module."
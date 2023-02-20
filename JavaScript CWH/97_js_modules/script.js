
// Common JS modules 

// const hello = require("./module1")
// hello(); // when only one module was present in module 1 file

// When 2 module are returning -> destructuring

// hello.hello();
// hello.ahello("Risshab");
// hello.ahello("Risshab");
// hello.ahello("Risshab");
// hello.ahello("Risshab");
// hello.ahello("Risshab");

// This becomes tedious when coding done many times -> use destructuring 

// const {hello,ahello} = require("./module1")

// ahello("Risshab")
// ahello("Risshab")
// ahello("Risshab")


// ES6 Modules
import harry, {hello,ahello} from "./module2.js";

hello();
ahello("Risshab");
harry();



let p1a = 0, p1b = "";
let p2a = 0, p2b = "0";
let p3a = 0, p3b = false;
let p4a = "", p4b = false;
let p5a = null, p5b = undefined;
let p6a = null, p6b = false;
let p7a = NaN, p7b = NaN;
let p8a = 1, p8b = "1";
let p9a = " \t\n ", p9b = 0;

let compteur = 0;

// 1
let r1eq = (p1a == p1b);
let r1seq = (p1a === p1b);
console.log('0 == ""         -> ' + r1eq + '    |   0 === ""         -> ' + r1seq);
if (r1eq && !r1seq) compteur++;

// 2
let r2eq = (p2a == p2b);
let r2seq = (p2a === p2b);
console.log('0 == "0"        -> ' + r2eq + '    |   0 === "0"        -> ' + r2seq);
if (r2eq && !r2seq) compteur++;

// 3
let r3eq = (p3a == p3b);
let r3seq = (p3a === p3b);
console.log('0 == false      -> ' + r3eq + '    |   0 === false      -> ' + r3seq);
if (r3eq && !r3seq) compteur++;

// 4
let r4eq = (p4a == p4b);
let r4seq = (p4a === p4b);
console.log('"" == false     -> ' + r4eq + '    |   "" === false     -> ' + r4seq);
if (r4eq && !r4seq) compteur++;

// 5
let r5eq = (p5a == p5b);
let r5seq = (p5a === p5b);
console.log('null == undefined -> ' + r5eq + ' |   null === undefined -> ' + r5seq);
if (r5eq && !r5seq) compteur++;

// 6
let r6eq = (p6a == p6b);
let r6seq = (p6a === p6b);
console.log('null == false   -> ' + r6eq + '    |   null === false   -> ' + r6seq);
if (r6eq && !r6seq) compteur++;

// 7
let r7eq = (p7a == p7b);
let r7seq = (p7a === p7b);
console.log('NaN == NaN      -> ' + r7eq + '    |   NaN === NaN      -> ' + r7seq);
if (r7eq && !r7seq) compteur++;

// 8
let r8eq = (p8a == p8b);
let r8seq = (p8a === p8b);
console.log('1 == "1"        -> ' + r8eq + '    |   1 === "1"        -> ' + r8seq);
if (r8eq && !r8seq) compteur++;

// 9
let r9eq = (p9a == p9b);
let r9seq = (p9a === p9b);
console.log('" \\t\\n " == 0  -> ' + r9eq + '    |   " \\t\\n " === 0  -> ' + r9seq);
if (r9eq && !r9seq) compteur++;

console.log('---');
console.log(compteur + ' paire(s) où == et === donnent des résultats différents');
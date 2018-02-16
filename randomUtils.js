const randI    = (min = 2, max = min + (min = 0)) => (Math.random() * (max - min) + min) | 0;
const rand     = (min = 1, max = min + (min = 0)) => Math.random() * (max - min) + min;   
const randOdds = (odds = 2) => Math.random() < (1 / odds);
const randItem = (a) => a[Math.random() * a.length | 0];
const randPick = (a) => a.splice(Math.random() * a.length | 0, 1)[0];
const randPut  = (a, item) => { const p = Math.random() * (a.length + 1) | 0; a.splice(p, 0, item); return p };
const randSet  = (l, min = 2, max = min + (min = 0)) => {const a = []; while(l--> 0) { a.push(Math.random() * (max - min) + min) } return a };
const randISet = (l, min = 2, max = min + (min = 0)) => {const a = []; while(l--> 0) { a.push((Math.random() * (max - min) + min) | 0) } return a };

/* Variation of Fisher-Yates shuffle algorithm. https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle */
const randShuffle = (a) => {const b = [...a]; a.length = 0; while(b.length > 0){ a.push(b.splice((Math.random() * b.length) | 0, 1)[0]) }; return a };

/*Seeded random via Linear congruential generator https://en.wikipedia.org/wiki/Linear_congruential_generator */
const sRand = (() => {
    var seed = 1;
    const max = 2576436549074795;
    return {  
        get max() { return max }, 
        get seed() { return seed },
        set seed(s) { seed = Math.floor(s) },
        get randI()  { return seed = ((8765432352450986 * seed) + 8507698654323524) % max },
        get rand ()  { return (seed = ((8765432352450986 * seed) + 8507698654323524) % max) / max } 
    }
})();
const srandSeed = (seed) => sRand.seed = seed;
const srandI    = (min = 2, max = min + (min = 0)) => (sRand.randI % (max - min)) + min;
const srand     = (min = 1, max = min + (min = 0)) => sRand.rand * (max - min) + min;
const srandOdds = (odds = 2) => sRand.rand < (1 / odds);
const srandItem = (a) => a[sRand.randI % a.length];
const srandPick = (a) => a.splice(sRand.randI % a.length, 1)[0];
const srandPut  = (a,item) => { const p = sRand.randI % (a.length + 1); a.splice(p, 0, item); return p };
const srandSet  = (l, min = 2, max = min + (min = 0)) => {const a = []; while(l-- > 0) { a.push(sRand.rand * (max - min) + min) } return a };
const srandISet = (l, min = 2, max = min + (min = 0)) => {const a = []; while(l-- > 0) { a.push((sRand.randI % (max - min)) + min) } return a };

/* Variation of Fisher-Yates shuffle algorithm. https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle */
const srandShuffle = (a) => { const b = [...a]; a.length = 0; while(b.length > 0){ a.push(b.splice(sRand.randI % b.length, 1)[0]) }; return a };

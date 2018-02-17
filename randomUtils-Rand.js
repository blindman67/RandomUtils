"use strict";
const Rand = (()=>{
    /*Seeded random via Linear congruential generator https://en.wikipedia.org/wiki/Linear_congruential_generator */
    const sRand = (() => {
        var seed = 1;
        const max = (2 ** 31) - 1;
        return {
            get max() {
                return max;
            },
            get seed() {
                return seed;
            },
            set seed(s) {
                seed = Math.floor(s);
            },
            get randI() {
                return seed = (2147483629 * seed + 2147483587) % max;
            },
            get rand() {
                return (seed = (2147483629 * seed + 2147483587) % max) / max;
            }
        }
    })();  

    
    const API = {
        int(min = 2, max = min + (min = 0)) {
            return (Math.random() * (max - min) + min) | 0;
        },
        float(min = 1, max = min + (min = 0)) {
            return Math.random() * (max - min) + min;
        },
        odds(odds = 2){
            return Math.random() < (1 / odds);
        },
        item(a) {
            return a[Math.random() * a.length | 0];
        },
        pick(a) {
            return a.splice(Math.random() * a.length | 0, 1)[0];
        },
        put(a, item) {
            const p = Math.random() * (a.length + 1) | 0;
            a.splice(p, 0, item);
            return p
        },
        setOfFloats(l, min = 2, max = min + (min = 0)) {
            const a = [];
            while (l-- > 0) {
                a.push(Math.random() * (max - min) + min);
            }
            return a;
        },
        setOfInts (l, min = 2, max = min + (min = 0)) {
            const a = [];
            while (l-- > 0) {
                a.push((Math.random() * (max - min) + min) | 0);
            }
            return a;
        },
        shuffle(a)  { /* Variation of Fisher-Yates shuffle algorithm. https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle */
            const b = [...a];
            a.length = 0;
            while (b.length > 0) {
                a.push(b.splice((Math.random() * b.length) | 0, 1)[0]);
            };
            return a;
        },
        set seed(seed) { 
            sRand.seed = seed;
        },
        sInt(min = 2, max = min + (min = 0)) {
            const range = (max - min);
            return (sRand.randI % range) * (range < 0 ? -1 : 1) + min;
        },
        sFloat(min = 1, max = min + (min = 0)) {
            return sRand.rand * (max - min) + min;
        },
        sOdds(odds = 2) {
            return sRand.rand < (1 / odds);
        },
        sItem(a) {
            return a[sRand.randI % a.length];
        },
        sPick(a) {
            return a.splice(sRand.randI % a.length, 1)[0];
        },
        sPut(a, item) {
            const p = sRand.randI % (a.length + 1);
            a.splice(p, 0, item);
            return p;
        },
        sSetOfFloats(l, min = 2, max = min + (min = 0)) {
            const a = [];
            while (l-- > 0) {
                a.push(sRand.rand * (max - min) + min);
            }
            return a;
        },
        sSetOfInts(l, min = 2, max = min + (min = 0)) {
            const a = [];
            while (l-- > 0) {
                a.push((sRand.randI % (max - min)) + min);
            }
            return a;
        },
        sShuffle(a) { /* Variation of Fisher-Yates shuffle algorithm. https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle */
            const b = [...a];
            a.length = 0;
            while (b.length > 0) {
                a.push(b.splice(sRand.randI % b.length, 1)[0]);
            };
            return a;
        },
    }
    return API;
})();
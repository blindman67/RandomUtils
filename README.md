# RandomUtils

A set of random helper functions to simplify many common random number needs.

The randoms come in two flavors. Random from JavaScript Math.random  and seeded randoms. The seeded randoms alow you to repeat any random sequence using a seed value.

## To use

Just include randomUtils.js on your page.

```Javascript
<script src = "randomUtils.js"></script>
```    

## Seeded random

Seeded random numbers will repeat the same squesnce of random values from the same seed.

Seeded randoms use the object `sRand`

```Javascript
sRand.max      // read only. Returns the max random integer value
sRand.seed     // Get set the random seed value.
sRand.randI    // read only. Returns a random integer from 0 to sRand.max -1
sRand.rand     // read only. Returns a random float from 0 to < 1
```    
    
You can use it directly via the above functions, or indirectly using the utility functions.    

Each time you get a seeded random value the seed value is updated

To set the seed value

```Javascript
sRand.seed = 1;  // set seed value to 1
sRand.seed = Date.now();  // Less predictable random seed
```    

or use

```Javascript
srandSeed(1);     
srandSeed(Date.now());     
```    
    
    
    

## Notes on random

Please note that seeded randoms are pseudo random using a [linear congruential generator][1]. Be aware of its limitations


The random shuffles used in randomUtils.js use a variation on the [Fisher-Yates shuffle algorithm][2]. 


## Random numbers

```Javascript
randI(min, max)    // random integer from and including min to max - 1 
randI(range)       // random integer from and including 0 to range -1    
randI()            // random interger 0 or 1 (like a coin)
rand(min, max)     // random float  min <= float < max 
rand(range)        // random float  0 <= float < range 
rand()             // random float  0 <= float < 1 
```    

Seeded randoms

```Javascript    
srandI(min, max)    // random integer from and including min to max - 1 
srandI(range)       // random integer from and including 0 to range -1    
srandI()            // random interger 0 or 1 (like a coin)
srand(min, max)     // random float  min <= float < max 
srand(range)        // random float  0 <= float < range 
srand()             // random float  0 <= float < 1 
```    
    
    
## Random odds

Two functions to get a average of  1 in n  'odds' chance of returning true

```Javascript
randOdds(odds)       // Chance of returning true 1/odds 
randOdds()           // Chance of returning true 1/2 
```    

Seeded random odds     
    
```Javascript
srandOdds(odds)      // Chance of returning true 1/odds 
srandOdds()          // Chance of returning true 1/2 
```    
    
## Random array utilities

Note that empty arrays will return undefined  

```Javascript
randItem(array)     // returns a randomly selected item from array
randPick(array)     // return a randomly selected item from array, removing the item from the array.
randPut(array, item)// Adds item randomly to the array. 
                    // Returns the index the item was add. Each call increases the array length by 1
randShuffle(array)  // shuffles an array to randomize the content. 
                    // The shuffle is performed in place, it does not create a new array
```    
                        
Seeded random array functions
              
```Javascript              
randItem(array)     
randPick(array)     
randPut(array, item)
randShuffle(array)                          
```    

Generate random arrays of integers and floats                        
 
```Javascript 
randISet(length,min, max)// returns an array of length containg random integer from and including min to max-1 
randISet(length, range)  // returns an array of length containg random integer 0 <= int < range 
randISet(length)         // returns an array of length containg random integers 0 or 1 

randSet(length,min, max) // returns an array of length containg random integer from and including min to max-1 
randSet(length, range)   // returns an array of length containg random integer 0 <= int < range 
randSet(length)          // returns an array of length containg random integers 0 or 1 
```    
 
Seeded version
 
```Javascript 
srandISet(length,min, max) 
srandISet(length, range)  
srandISet(length)         

srandSet(length,min, max) 
srandSet(length, range)   
srandSet(length)          
```    
    


    
 


  [1]: https://en.wikipedia.org/wiki/Linear_congruential_generator
  [2]: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

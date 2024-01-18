import * as fizzbuzz from '../fizzbuzz/index.js';

export function buzzfizz() {
    return fizzbuzz.buzz() + fizzbuzz.fizz();
}
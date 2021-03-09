/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


How many such routes are there through a 20×20 grid?
*/

/*
Thoughts:
You have to use 2xright and 2xdown in any order
rrdd, ddrr, rdrd, drdr, rddr, drrd
1100, 0011, 1010, 0101, 1001, 0110

research led me to the binomial coefficient
https://en.wikipedia.org/wiki/Binomial_coefficient
(a+b)!/(a!*b!)
*/
import { getBinomialCoefficient } from './utils/math.ts'

const LATTICE_DIM: [number, number] = [20, 20]

console.log(getBinomialCoefficient(LATTICE_DIM))


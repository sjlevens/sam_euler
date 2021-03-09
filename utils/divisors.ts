export const getDivisors = (num: number) => {
  const first = [1]

  for(let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      first.push(i)
    }
  } 
  
  const second = [...first].reverse().map(val => num / val)

  return first.concat(second)
}

export const numOfDivisors = (num: number) => getDivisors(num).length


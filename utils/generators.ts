export function* fibbonacci(): Generator<number, string, boolean> {
  let current = 0
  let next = 1

  while (true) {
    if(yield current) {
      break
    } else {
      [current, next] = [next, next + current]
    }
  }

  return "done!"

}

export function* triangle(): Generator<number> {

  let current = 1
  let next = 2

  while(true) {
    yield current
    current += next
    next++
  }
}
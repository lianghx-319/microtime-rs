import test from 'ava'

import * as microtime from '../index'

// From https://github.com/wadey/node-microtime/blob/master/test.js
test('microtime.now should work', (t) => {
  const start = microtime.now()
  let minDiff = Infinity
  const minCycles = 10000
  const maxCycles = 100000
  let cycles = maxCycles

  for (let i = 0; i < cycles; ++i) {
    const a = microtime.now()
    const b = microtime.now()
    const diff = b - a || b - start

    if (diff > 0 && diff < minDiff) {
      minDiff = diff
      cycles = minCycles
    }
  }
  t.not(minDiff, Infinity)
})

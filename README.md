# @microtime-rs/node

[![npm](https://img.shields.io/npm/dm/@microtime-rs/node.svg)](https://www.npmjs.com/package/@microtime-rs/node)
[![npm](https://img.shields.io/npm/v/@microtime-rs/node.svg)](https://www.npmjs.com/package/@microtime-rs/node)

Date.now() will only give you accuracy in milliseconds. This module calls
`gettimeofday(2)` to get the time in microseconds and provides it in a few
different formats. The same warning from that function applies:
_The resolution of the system clock is hardware dependent, and the time may
be updated continuously or in ``ticks.''_

# Installation

    npm install @microtime-rs/node

# Usage

### microtime.now()

Get the current time in microseconds as an integer.

<!-- ### microtime.nowDouble()

Get the current time in seconds as a floating point number with microsecond
accuracy (similar to `time.time()` in Python and `Time.now.to_f` in Ruby).

### microtime.nowStruct()

Get the current time and return as a list with seconds and microseconds (matching the return value of `gettimeofday(2)`). -->

# Example

    > var microtime = require('microtime')
    > microtime.now()
    1297448895297028
    <!-- > microtime.nowDouble()
    1297448897.600976
    > microtime.nowStruct()
    [ 1297448902, 753875 ] -->

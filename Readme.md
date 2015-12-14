
# move-steering

[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

to make motors move at the same time

## Installation

    $ npm install move-steering

## Usage

```js
var MoveSteering = require('move-steering')
var driveMotors = new MoveSteering('b', 'c')

driveMotors.degrees(360, 300, 0) // move straight for 1 motor rotation
driveMotors.timed(2000, 300, 100) // turn right for 2 seconds
```

## API

### MoveSteering(leftPort, rightPort)

- `leftPort` - port letter of the left motor
- `rightPort` - port letter of the right motor

**Returns:** a move steering instance that controls two motors

### .forever(speed, opts)
Run both motors until they receive a stop command.

- `speed` - speed at which to run the motors
- `opts` - an object of optional parameters

### .degrees(degrees, speed, turn)
Run both motors with the ability to turn.

- `degrees` - number of degrees for the motor to spin
- `speed` - speed at which to run the motors
- `turn` - number between -100 and 100 to denote amount of turning. -100 is maximum left turn. 0 is straight. 100 is maximum right turn.

### .timed(time, speed, turn)
Run both motor for a specified amount of time.

  - `time` - time in milliseconds
  - `speed` - speed at which to run the motors
  - `turn` - number between -100 and 100 to denote amount of turning. -100 is maximum left turn. 0 is straight. 100 is maximum right turn.

### .stop()
Stop both motors.


### .reset()
Reset both motors.

## License

MIT

[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/move-steering.svg?style=flat-square
[npm-url]: https://npmjs.org/package/move-steering

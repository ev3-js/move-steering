/**
 * Imports
 */
var Motor = require('ev3-js-motor')
var defaults = require('101/defaults')

/**
 * Vars
 */
var motorDefaults = {
  speed: 300,
  braking: 'brake',
  wait: false
}

/**
 * Expose MoveSteering
 */
module.exports = MoveSteering

/**
 * MoveSteering drives with two motors at the same time
 * @param  {String} leftPort  letter of port for left motor
 * @param  {String} rightPort letter of port for right motor
 */
function MoveSteering (leftPort, rightPort) {
  leftPort = leftPort ? leftPort : 'b'
  rightPort = rightPort ? rightPort : 'c'
  this.motors = [new Motor(leftPort), new Motor(rightPort)]
}

/**
 * run motors forever
 * @param  {Number} speed speed of motor
 * @param  {Object} opts  object of optional params
 */
MoveSteering.prototype.forever = function (speed, turn, opts) {
  this.motors.forEach(function (motor, i) {
    motor.forever(speed, defaults(opts, motorDefaults))
  })
}

/**
 * run drive motors for a number of degrees
 * @param  {Number} degrees degrees to turn motor
 * @param  {Number} speed   speed at which to turn motors
 * @param  {Number} turn    turn direction
 */
MoveSteering.prototype.degrees = function (degrees, speed, turn) {
  if (turn > 100) { turn = 100 }
  if (turn < -100) { turn = -100 }
  var offDegrees = degrees * ((100 - (Math.abs(turn) * 2)) / 100)

  if (turn === 0) {
    this.motors[0].degrees(degrees, {speed: speed, wait: false})
    this.motors[1].degrees(degrees, {speed: speed, wait: false})
  } else if (turn > 0) {
    this.motors[0].degrees(degrees, {speed: speed, wait: false})
    this.motors[1].degrees(offDegrees, {speed: speed, wait: false})
  } else if (turn < 0) {
    this.motors[0].degrees(offDegrees, {speed: speed, wait: false})
    this.motors[1].degrees(degrees, {speed: speed, wait: false})
  }
  while (this.motors[0].is('running') || this.motors[1].is('running')) {}
}

/**
 * run drive motors for a specified amount of time
 * @param  {Number} time  Time to run the motors for (in milliseconds)
 * @param  {Number} speed Speed at which to run the motors
 * @param  {Number} turn  turn direction
 */
MoveSteering.prototype.timed = function (time, speed, turn) {
  if (turn > 100) { turn = 100 }
  if (turn < -100) { turn = -100 }
  var offSpeed = speed * ((100 - (Math.abs(turn) * 2)) / 100)

  if (turn === 0) {
    this.motors[0].timed(time, {speed: speed, wait: false})
    this.motors[1].timed(time, {speed: speed, wait: false})
  } else if (turn > 0) {
    this.motors[0].timed(time, {speed: speed, wait: false})
    this.motors[1].timed(time, {speed: offSpeed, wait: false})
  } else if (turn < 0) {
    this.motors[0].timed(time, {speed: offSpeed, wait: false})
    this.motors[1].timed(time, {speed: speed, wait: false})
  }
  while (this.motors[0].is('running') || this.motors[1].is('running')) {}
}

/**
 * stops motors
 */
MoveSteering.prototype.stop = function () {
  this.motors.forEach(function (motor) {
    motor.stop()
  })
}

/**
 * reset motors
 */
MoveSteering.prototype.reset = function () {
  this.motors.forEach(function (motor) {
    motor.reset()
  })
}

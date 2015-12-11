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
 * Expose driveMotors
 */

module.exports = MoveSteering

/**
 * moveSteering drives with two motors at the same time
 * @param  {String} leftPort  letter of port for left motor
 * @param  {String} rightPort letter of port for right motor
 */

function MoveSteering (leftPort, rightPort) {
  this.motors = [new Motor(leftPort), new Motor(rightPort)]
}

/**
 * run motors forever
 * @param  {Number} speed speed of motor
 * @param  {Object} opts  object of optional params
 */

MoveSteering.prototype.runForever = function (speed, opts) {
  var running = []
  this.motors.forEach(function (motor, i) {
    motor.runForever(speed, defaults(motorDefaults, opts))
    running[i] = this.is('running')
  })
  while (running[0] && running[1]) {}
}

/**
 * run motors for degrees
 * @param  {Number} degrees number of degrees to turn
 * @param  {Object} opts    object of optional params
 * @return {[type]}         [description]
 */
MoveSteering.prototype.runDegrees = function (degrees, opts) {
  var running = []
  this.motors.forEach(function (motor, i) {
    motor.runDegrees(degrees, defaults(motorDefaults, opts))
    running[i] = this.is('running')
  })
  while (running[0] && running[1]) {}
}

/**
 * run motors to absolute position
 * @param  {Number} position motor position
 * @param  {Object} opts     object of optional params
 */

MoveSteering.prototype.runToAbsPos = function (position, opts) {
  var running = []
  this.motors.forEach(function (motor, i) {
    motor.runToAbsPos(position, defaults(motorDefaults, opts))
    running[i] = this.is('running')
  })
  while (running[0] && running[1]) {}
}

/**
 * stops motors
 */

MoveSteering.prototype.stop = function () {
  this.motors.forEach(function (motor) {
    motor.stop()
  })
}

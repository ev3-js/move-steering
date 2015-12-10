'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ev3JsMotor = require('ev3-js-motor');

var _ev3JsMotor2 = _interopRequireDefault(_ev3JsMotor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Modules
 */

/**
 * vars
 */

var defaults = {
  speed: 300,
  braking: 'brake',
  wait: false
};

/**
 * Expose driveMotors
 */

/**
 * Imports
 */

exports.default = moveSteering;

/**
 * moveSteering drives with two motors at the same time
 * @param  {String} leftPort  letter of port for left motor
 * @param  {String} rightPort letter of port for right motor
 */

function moveSteering(leftPort, rightPort) {
  this.motors = [(0, _ev3JsMotor2.default)(leftPort), (0, _ev3JsMotor2.default)(rightPort)];
}

/**
 * run motors forever
 * @param  {Number} speed speed of motor
 * @param  {Object} opts  object of optional params
 */
moveSteering.prototype.runForever = function (speed, opts) {
  for (var motor in this.motors) {
    motor.runForever(speed, defaults);
  }
};

/**
 * run motors for degrees
 * @param  {Number} degrees number of degrees to turn
 * @param  {Object} opts    object of optional params
 * @return {[type]}         [description]
 */
moveSteering.prototype.runDegrees = function (degrees, opts) {
  for (var motor in this.motors) {
    motor.runToRelPos(degrees, defaults);
  }
};

/**
 * run motors to absolute position
 * @param  {Number} position motor position
 * @param  {Object} opts     object of optional params
 */
moveSteering.prototype.runToAbsPos = function (position, opts) {
  for (var motor in this.motors) {
    motor.runToAbsPos(position, defaults);
  }
};

/**
 * stops motors
 */
moveSteering.prototype.stop = function () {
  for (var motor in this.motors) {
    motor.stop();
  }
};

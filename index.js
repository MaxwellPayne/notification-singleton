'use strict';

var events = require('events'),
    util = require('util');

function NotificationCenter() {
    //events.EventEmitter.call(this);
};
util.inherits(NotificationCenter, events.EventEmitter);

exports.NotificationEmitter = new NotificationCenter();
'use strict';

var events = require('events'),
    util = require('util'),
    apn = require('apn');

var options = {
    cert: '',
    key: '',
    /*
     * options: values,
     */
    passphrase: ''
};

function NotificationCenter() {
  this.connection = new apn.Connection(options);
};
util.inherits(NotificationCenter, events.EventEmitter);

NotificationCenter.prototype.push = function(notification, toDevice) {
  /* emit some sort of event to watchers of the singleton? */
  this.connection.pushNotification(notification, toDevice);
};

module.exports = new NotificationCenter();

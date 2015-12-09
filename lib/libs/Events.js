'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Events = (function () {
  function Events() {
    _classCallCheck(this, Events);

    this._events = {};
  }

  _createClass(Events, [{
    key: 'trigger',
    value: function trigger(label) {
      if (!this._events[label]) return;

      for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      for (var func in this._events[label]) {
        this._events[label][func].apply(null, rest);
      }
    }
  }, {
    key: 'register',
    value: function register(label, fct) {
      if (!this._events[label]) this._events[label] = [];

      this._events[label].push(fct);
    }
  }, {
    key: 'unregister',
    value: function unregister(label, fct) {
      this._events[label].splice(this._events[label].indexOf(fct), 1);
    }

    /**
     *
     * COMMON SUBSCRIBE AND UNSUBSCRIBE ALIASES
     *
     */

  }, {
    key: 'subscribe',
    value: function subscribe() {
      return this.register(arguments);
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe() {
      return this.unregister.call(this, arguments);
    }
  }, {
    key: 'on',
    value: function on() {
      return this.register.call(this, arguments);
    }
  }, {
    key: 'off',
    value: function off() {
      return this.unregister.call(this, arguments);
    }
  }, {
    key: 'listen',
    value: function listen() {
      return this.register.call(this, arguments);
    }
  }, {
    key: 'unlisten',
    value: function unlisten() {
      return this.unregister.call(this, arguments);
    }

    /**
     *
     * COMMON PUBLISH ALIASES
     */

  }, {
    key: 'emit',
    value: function emit() {
      return this.trigger.call(this, arguments);
    }
  }]);

  return Events;
})();

exports.default = Events;
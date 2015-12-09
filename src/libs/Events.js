'use strict';

class Events {
  constructor() { this._events = {}; }

  trigger(label, ...rest) {
    if (!this._events[label]) return;

    for (let func in this._events[label]) {
      this._events[label][func].apply(null, rest);
    }
  }

  register(label, fct) {
    if (!this._events[label]) this._events[label] = [];

    this._events[label].push(fct);
  }

  unregister(label, fct) {
    this._events[label].splice(this._events[label].indexOf(fct), 1);
  }

  /**
   *
   * COMMON SUBSCRIBE AND UNSUBSCRIBE ALIASES
   *
   */
  subscribe() { return this.register(arguments); }
  unsubscribe() { return this.unregister.call(this, arguments); }
  on() { return this.register.call(this, arguments); }
  off() { return this.unregister.call(this, arguments); }
  listen() { return this.register.call(this, arguments); }
  unlisten() { return this.unregister.call(this, arguments); }

  /**
   *
   * COMMON PUBLISH ALIASES
   */
  emit() { return this.trigger.call(this, arguments); }
}

export default Events;

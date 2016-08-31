'use strict';

module.exports = class Mixin {
  constructor(...mixins) {
    for (let mixin of mixins.reverse()) {
      let props = Object.getOwnPropertyNames(mixin.prototype),
        p = props.length;
      while (p--) {
        if (props[p] === 'constructor') {
          let _this = new mixin.prototype[props[p]];

          for (let _t in _this) {
            this[_t] = _this[_t];
          }
          continue;
        }
        this[props[p]] = mixin.prototype[props[p]];
      }
    }
  }
};

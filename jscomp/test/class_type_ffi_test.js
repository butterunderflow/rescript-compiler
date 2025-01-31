'use strict';

var Curry = require("../../lib/js/curry.js");

function test_set(x) {
  x.length = 3;
}

function ff(fn, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
  return fn(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
}

function ff2(fn, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
  return fn(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
}

function off2(o, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
  return Curry.app(o.huge_method, [
              a0,
              a1,
              a2,
              a3,
              a4,
              a5,
              a6,
              a7,
              a8,
              a9,
              a10,
              a11,
              a12
            ]);
}

function mk_f(param) {
  return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
    return Curry.app(a0, [
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7,
                a8,
                a9,
                a10,
                a11,
                a12
              ]);
  };
}

exports.test_set = test_set;
exports.ff = ff;
exports.ff2 = ff2;
exports.off2 = off2;
exports.mk_f = mk_f;
/* No side effect */

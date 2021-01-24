"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var func = function func(name) {
  console.log("My name is ".concat(name));
};

func(Aleksa);
func(Pera);

var User = function User() {
  _classCallCheck(this, User);

  this.score = 0;
};

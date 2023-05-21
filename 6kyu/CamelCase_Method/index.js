/* https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript */

String.prototype.camelCase = function () {
  return this === '' ? ''
    : this.toString().split(' ').map((el) => (el.at(0) ? el.at(0).toUpperCase() : '') + el.slice(1)).join('');
};

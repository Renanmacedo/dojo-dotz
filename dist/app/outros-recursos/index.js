"use strict";
/**
 * readonly
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiple = exports.Fruits = exports.ReadOnly = void 0;
class ReadOnly {
    constructor() {
        this.active = true;
        this.sizes = [320, 568, 760, 998, 1400];
        this.sizes = [];
    }
}
exports.ReadOnly = ReadOnly;
/**
 * tuplas
 */
class Fruits {
    constructor() { }
    set items(tupla) {
        this._items = tupla;
    }
    get items() { return this.items; }
}
exports.Fruits = Fruits;
/**
 * Rest Paramentres
 */
function multiple(base, ...numbers) {
    numbers.forEach(_number => console.info(`[number ${_number} * ${base}] =`, base * _number));
}
exports.multiple = multiple;
//# sourceMappingURL=index.js.map
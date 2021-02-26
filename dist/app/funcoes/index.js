"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexLayout = void 0;
class FlexLayout {
    constructor() {
        this.x = 100;
        this.y = 200;
        // inferencia de tipo
        this.calculate = function (x, y) {
            return x + y;
        };
    }
    pointX() {
        return 0;
    }
    point(compareFn) {
        const result = compareFn(this.x, this.y);
        return result;
    }
}
exports.FlexLayout = FlexLayout;
//# sourceMappingURL=index.js.map
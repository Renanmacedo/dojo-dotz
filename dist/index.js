"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const outros_recursos_1 = require("./app/outros-recursos/");
const funcoes_1 = require("./app/funcoes/");
outros_recursos_1.multiple(5, 2, 3, 5, 10, 15, 20, 25);
let flex = new funcoes_1.FlexLayout();
const maxPoint = flex.point((x, y) => Math.max(x, y));
console.info('[ max point ] =', maxPoint);
const readOnly = new outros_recursos_1.ReadOnly();
console.log(readOnly.sizes);
//# sourceMappingURL=index.js.map
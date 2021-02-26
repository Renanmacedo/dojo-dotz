"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Development = exports.Gerente = exports.Employer = void 0;
class Employer {
    calculateSalary() {
        return Number(this.salary).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
}
exports.Employer = Employer;
class Gerente extends Employer {
    constructor() {
        super(...arguments);
        this.salary = 20000;
    }
}
exports.Gerente = Gerente;
class Development extends Employer {
    constructor() {
        super(...arguments);
        this.salary = 10800;
    }
}
exports.Development = Development;
//# sourceMappingURL=generic.js.map
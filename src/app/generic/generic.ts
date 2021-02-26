
export abstract class Employer<T> {

    abstract salary: number;

    calculateSalary(): string {
        return Number(this.salary).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
    }
}

export class Gerente extends Employer<Gerente> {
    salary: number = 20000;
}

export class Development extends Employer<Development> {
    salary: number = 10800;
}
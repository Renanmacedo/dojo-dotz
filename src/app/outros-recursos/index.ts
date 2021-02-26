
/**
 * readonly 
 */

export class ReadOnly {

    readonly active: boolean = true;
    
    readonly sizes: ReadonlyArray<number> = [320, 568, 760, 998, 1400];

    constructor(){}
    
 }

 
/**
 * tuplas
 */

export class Fruits {

    private _items: [string, number, string, number];

    constructor() {}

    set items(tupla: [string, number, string, number]){
       this._items = tupla;
    }

    get items(): [string, number, string, number] { return this.items}
 }

 /**
  * Rest Paramentres
  */

 export function multiple(base: number, ...numbers: number[]): void{

    numbers.forEach( _number => console.info(`[number ${_number} * ${base}] =`,base * _number));
  }
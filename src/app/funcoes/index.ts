interface Point {

    calculate: (x: number, y: number) => number;

    pointX(): number;

    point(compareFn?: ( x: number, y: number) => number): number;
}


export class FlexLayout implements Point{    

    
    private x: number = 100;
    private y: number = 200;

    // inferencia de tipo
    calculate: (x: number, y: number) => number = function(x, y) {
        return x + y;
    };

    pointX(): number {
        return 0;
    }
    point(compareFn?: (x: number, y: number) => number): number {
        const result = compareFn(this.x, this.y);
        
        return result;
    }

}


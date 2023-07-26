export class MathUtil{
    public static printMathTable(value:number):string{
        let temp:string = '';
        for(let i:number = 0; i <= 10; i++){
        temp += `${value} * ${i} = ${value * i}`;
        }
        return temp;
    }
}
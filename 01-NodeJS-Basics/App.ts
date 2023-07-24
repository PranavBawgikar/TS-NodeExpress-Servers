let courseName:string = `Backend End Development`; //:string specifies the type of the variable as a string
console.log(courseName);

let printNumbers = (start:number, end:number):void => { //`=>` syntax indicates an arrow function, which is a shorthand way of defining a function
    let temp:string = '';
    if(start < end){
        for(let i:number = start; i <= end; i++){
            temp += `${i} `; //Appends the current value of i (converted to a string) followed by a space to the temp string
        }
        console.log(temp);
    } else {
        console.log('Invalid Numbers');
    }
};

printNumbers(5, 10);
function overloading(num1: number,num2:number): number;
function overloading(str1: string, str2: string): string;
function overloading(arg1:any,arg2:any): any
{
    if(typeof arg1 === "number" && typeof arg2 ==="number")
    {
        return arg1 + arg2;
    }
    else if(typeof arg1 ==="string" && typeof arg2 ==="string")
    {
        return arg1.concat(arg2);
    }
    throw new Error("Invalid Argument");
}
console.log(overloading(10,20));
console.log(overloading("Type","Script"));
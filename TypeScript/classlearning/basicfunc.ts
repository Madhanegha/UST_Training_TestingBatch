function addNum(){
    let num1 : number = 10;
    let num2 : number = 20;
    console.log(`Addition is ${num1+num2}`)
}

function subNum(num1:number,num2:number)
{
    console.log(`Subtraction is ${num1-num2}`)
}
function multiNum(n1:number,n2:number){
    return n1*n2
}

function personalInfo(name: string, city: string, age?:number)
{
    if(age)
    {
        console.log(`Name: ${name}, Age: ${age}, City: ${city}`)
    }
    else
    {
        console.log(`Name: ${name}, City: ${city}`)
    }
}

addNum()
subNum(10,2)
console.log(`Product is ${multiNum(10,10)}`)
personalInfo("Madhanegha","TUP",21)
personalInfo("Madhanegha","CBE")
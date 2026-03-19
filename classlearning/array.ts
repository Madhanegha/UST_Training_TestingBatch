let names: string[] = ["Aadhi","Madhu","Chan"];
console.log("Name:", names);
console.log("Name1:",names[0]);
for(let i: number =0;i<names.length;i++)
{
    console.log(`Name at index ${i} is ${names[i]}`)
}

let numm: readonly number[] = [1,2,3,4,5];

let newArray = numm.map((value) => value*2);
console.log("Number Array:"+numm)
console.log("New Array",newArray)

let oddNumber = numm.filter((value) => value%2 !==0);
console.log("Odd Numbers are",oddNumber)

let sum = numm.reduce((accumulator,currentValue) => accumulator + currentValue,0);
console.log("Sum of array",sum)

//numm.forEach(value) => console.log(`Value of Array is ${value}`)
//FOR EACH
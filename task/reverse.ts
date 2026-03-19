//reverse the string
let str:string ="TypeScript";
let rev: string =""
for(let i = str.length-1;i>=0;i--)
{
    rev = rev.concat(str[i]);
}
console.log(rev);
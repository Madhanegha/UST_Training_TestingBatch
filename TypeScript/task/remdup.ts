//remove dup (print unique character)
let s:string = "correspondence";
let sd:string = "";
for(let i =0;i<s.length;i++)
{
    let count = 0;
    for(let j=0;j<s.length;j++)
    {
        // console.log(sd[j])
        if(s[i]===s[j])
      {
            count += 1;
        }
    }
    if(count===1)
    {
    sd +=s[i];
    }
}
console.log(sd);
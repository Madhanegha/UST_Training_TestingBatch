let word : string ='apple';
let uniqcount : any = {}
for(let i=0;i<word.length;i++)
{
    let ch =word[i];
    let isVow = ch ==='a'|| ch ==='e' || ch ==='i'|| ch ==='o' ||ch ==='u'|| ch ==='A'|| ch ==='E' || ch ==='I'|| ch ==='O' ||ch ==='U';
    if(isVow)
    {
        if(uniqcount[ch])
        {
            uniqcount[ch]++
        }
        else{
            uniqcount[ch]=1
        }
    }
}
let found = false;
for(let key in uniqcount)
{
    if(uniqcount[key] === 1){
        console.log(key);
        found = true;
    }
}
if(!found)
{
    console.log(`0 unique vowels`);
}
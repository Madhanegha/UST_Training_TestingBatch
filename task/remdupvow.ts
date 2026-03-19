let vow_string : string = "correspondence";
let result: string =" ";
let freq : any = {}
for(let i=0;i<=vow_string.length;i++)
{
    let ch = vow_string[i];
    if(freq[ch]){
        freq[ch]++
    }
    else{
        freq[ch]=1;
    }
}
for(let i=0;i<vow_string.length;i++)
{
    let ch = vow_string[i];
    let isVowel = ch ==='a'|| ch ==='e' || ch ==='i'|| ch ==='o' ||ch ==='u'|| ch ==='A'|| ch ==='E' || ch ==='I'|| ch ==='O' ||ch ==='U';
    if(isVowel)
    {
        if (freq[ch]==1){
            result+=ch;
        }
    }
    else{
        result+=ch;
    }
}
console.log(result);
let narr : number[] =[7,9,2,0,1];
for(let i = 0;i<narr.length;i++)
{
    for(let j=0;j<narr.length-1;j++)
    {
        if(narr[j]>narr[j+1])
        {
            let temp = narr[j];
            narr[j] = narr[j+1];
            narr[j+1] = temp;
        }
    }
}
console.log(narr);
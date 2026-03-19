let time: number = 12;
if((time>=0 && time<=4) || (time >=19))
{
    console.log(`Good Night`);
}
else if(time>4 && time<12)
{
    console.log(`Good morning`);
}
else if(time>=12 && time <16)
{
    console.log(`Good afternoon`);
}
else if(time>=16 && time<19)
{
    console.log('Good evening');
}
else{
    console.log(`Enter valid time`);
}
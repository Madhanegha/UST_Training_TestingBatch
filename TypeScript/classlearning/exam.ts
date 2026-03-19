//early or on time or late
let t: String = '9.30'
const [hour,min]= t.split(".").map(Number)

if(min>60 || min<0){
    console.log(`invalid input`)
}
else{
let arrivingtime = (hour*60)+min;
if(arrivingtime == 570){
    console.log(`ON-TIME`);
}
else if(arrivingtime < 570){
    console.log(`EARLY`);
}
else if(arrivingtime>570){
    console.log(`LATE`);
}
else{
    console.log(`INVALID TIME`);
}
}
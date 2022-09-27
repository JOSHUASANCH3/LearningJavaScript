const now = new Date();
const win95Lauch = Date(1995, 24, 7);
const demoDate =new Date();
demoDate.setMonth(0);

console.log(now);//muestra la fecha y hora actual
console.log(win95Lauch);
console.log(`Day of week:${demoDate.getDay()}`);//0 sunday, 1 monday, 2 tuesday, 3 wednesday, 4 thursday, 5 friday, 6 saturday

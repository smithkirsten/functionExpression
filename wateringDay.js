//create a function to track when you should water your plants
//only water succulents on first Sunday of month
//water all other plants on Sundays
//water ferns on Wednesdays also

const week = [1, 2, 3, 4, 5];

const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let index = Math.floor(Math.random() * 7);

const dayOfWeek = day[index];

index = Math.floor(Math.random() * 5);

const weekOfMonth = week[index];

console.log(dayOfWeek);
console.log(weekOfMonth);

//create a function to track when you should water your plants
//only water succulents on first Sunday of month
//water all other plants on Sundays
//water ferns on Wednesdays also

function wateringDay() {

const week = [1, 2, 3, 4, 5];

const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let index = Math.floor(Math.random() * 7);

const dayOfWeek = day[index];

index = Math.floor(Math.random() * 5);

const weekOfMonth = week[index];

console.log(`Week: ${weekOfMonth}`);
console.log(`Day: ${dayOfWeek}`);

  if(day === "Sunday" && week === 1) {
    console.log("Water ALL plants");
    return true;
  } else if (day === "Sunday" && week !== 1) {
    console.log("Water all plants EXCEPT succulants");
    return true;
  } else if (day === "Wednesday") {
    console.log("Water ferns ONLY");
    return true;
  } else {
    console.log("Today is not a watering day");
    return false;
  }

}

wateringDay();

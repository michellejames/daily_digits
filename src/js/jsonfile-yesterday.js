
let date = new Date();

date.setDate(date.getDate()-1);
console.log(date.getDate());

let weekdays = new Array(7);
weekdays[0] =  "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";
let weekday = weekdays[date.getDay()];
console.log(weekday);

let months = new Array();
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";

let month = months[date.getMonth()];

let year = date.getFullYear();

let importData = {

  sidebar: {
    currentWeekday: weekday,
    currentMonth: month,
    currentDay: date.getDate(),
    currentYear: year,
  },
  mainContent: [
    {
      headline: "people killed at Marjory",
      subline: "Stoneman Douglas High School",
    },
    {
      headline: "of the 2,613 deaths resulting from gun violence in 2018",
      subline: "have been people under the age of 17",
    },
    {
      headline: "unintentional shootings",
      subline: "in 2018 so far",
    },
    {
      headline: "Every year, roughly ",
      subline: "suicides involve firearms",
    },
    {
      headline: "mass shootings in the United States in 2018 so far",
      subline: "Note: a mass shooting is defined by the U.S. government as having at least four victims", 
    },
  ],
};

console.log(importData);

let weekdayYesterday = document.querySelector(".special-weekday");
weekdayYesterday.innerHTML = weekday;

let monthYesterday = document.querySelector(".special-month");
monthYesterday.innerHTML = month;

let dayYesterday = document.querySelector(".special-day");
dayYesterday.innerHTML = date.getDate();

let yearYesterday = document.querySelector(".special-year");
yearYesterday.innerHTML = year;


document.querySelectorAll(".article-headline").forEach(function($headline, i) {
    $headline.innerHTML = importData.mainContent[i].headline;
});

document.querySelectorAll(".article-subline").forEach(function($subline, i) {
    $subline.innerHTML = importData.mainContent[i].subline;
});













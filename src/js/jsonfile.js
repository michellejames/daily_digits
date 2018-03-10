let today = new Date();

let weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
let currentWeekday = weekday[today.getDay()];

let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

let currentMonth = month[today.getMonth()];

let currentDay = today.getDate();

let currentYear = today.getFullYear();
console.log(currentWeekday, currentMonth, currentDay, currentYear);


let importData = {

  sidebar: {
    currentWeekday: currentWeekday,
    currentMonth: currentMonth,
    currentDay: currentDay,
    currentYear: currentYear,
  },
  mainContent: [
    {
      headline: "The Tesla Model 3 has",
      subline: "preorders for 2018-19",
      category: "Technology",
    },
    {
      headline: "Claudia Berroa sold",
      subline: "cups of flan last week",
      category: "Food",
    },
    {
      headline: "Yesterday",
      subline: "hotdogs were sold at Suntrust Park",
      category: "Sports",
    },
    {
      headline: "babies were born in the",
      subline: "United States yesterday",
      category: "Health",
    },
    {
      headline: "Black Panther grossed",
      subline: "in it's opening weekend",
      category: "Culture",
    },
  ],
  // detailContent: {
  //   fact1: {
  //     factCategoryHighlight: "Statistics: ",
  //     factCategory: "Culture",
  //     factHeadline: "Black Panther grossed",
  //     factSubline: "in it's",
  //     factSublineHighlight: "opening weekend",
  //     factDetail: "Black Panther recorded the highest pre-sale tickets sold for a superhero movie, outselling Captain America and Batman vs. Superman.",
  //   }
  // }
};

console.log(importData);

let weekdayNow = document.querySelector(".current-weekday");
weekdayNow.innerHTML = currentWeekday;

let monthNow = document.querySelector(".current-month");
monthNow.innerHTML = currentMonth;

let dayNow = document.querySelector(".current-day");
dayNow.innerHTML = currentDay;

let yearNow = document.querySelector(".current-year");
yearNow.innerHTML = currentYear;


//////// Articles //////////

document.querySelectorAll(".article-headline").forEach(function($headline, i) {
    $headline.innerHTML = importData.mainContent[i].headline;
});

document.querySelectorAll(".article-subline").forEach(function($subline, i) {
    $subline.innerHTML = importData.mainContent[i].subline;
});

document.querySelectorAll(".category").forEach(function($category, i) {
    $category.innerHTML = importData.mainContent[i].category;
});










function shouldWePartyTonight(dayOfTheWeek) {
    if (dayOfTheWeek == "Monday" || dayOfTheWeek == "Tuesday" || dayOfTheWeek == "Wednesday" || dayOfTheWeek == "Thursday" || dayOfTheWeek == "Saturday" || dayOfTheWeek == "Sunday") {
        console.log("NO WAY! You should be coding...");
    }
    else {
        console.log("Yeah... I guess if you need a break.");
    }

};

shouldWePartyTonight('Monday');

function testNum(a) {
  if (a > 0) {
    return "positive";
  } else {
    return "NOT positive";
  }
}

console.log(testNum(-5));
// expected output: "NOT positive"

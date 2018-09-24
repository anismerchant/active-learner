function shouldWePartyTonight(dayOfTheWeek) {
    if (dayOfTheWeek == "Monday" || dayOfTheWeek == "Tuesday" || dayOfTheWeek == "Wednesday") {
        console.log("NO WAY! You should be coding...");
    }
    else if (dayOfTheWeek == "Thursday") {
        console.log("Depends! Is there a special on wings today?")
    }
    else if (dayOfTheWeek == "Friday") {
        console.log("Yeah... I guess if you need a break.");
    }
    else if (dayOfTheWeek == "Saturday" || dayOfTheWeek == "Sunday") {
        console.log("I don't know, seems like a good day to read about JavaScript.");
    }
    else {
        console.log("That is not a valid day of the week... have you already been partying?");
    }

};

shouldWePartyTonight('Monday');

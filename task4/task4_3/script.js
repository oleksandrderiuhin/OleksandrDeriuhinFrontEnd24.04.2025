const birthday = prompt("Enter your birth year:");

let message = "";

if (!birthday) {
    alert("Too bad you didn't enter your birth year.");
} else {
    const age = Number(birthday);
    message += `Your age: ${age}\n`;
    const city = prompt("Enter your city:");


    if (!city) {
        alert("Too bad you didn't enter your city.");
    } else {
        switch (city) {
            case "kiev":
                message += "You are living in the capital of Ukraine.\n";
                break;
            case "washington":
                message += "You are living in the capital of the USA.\n";
                break;
            case "london":
                message += "You are living in the capital of the UK.\n";
                break;
            default:
                message += `You are living in ${city}.\n`;
        }
    }
}

const sport = prompt("Enter your favourite sport:");

if (!sport) {
    alert("Too bad you didn't enter your favorite sport.");
}
else
    {
        switch (sport) {
            case "football":
                message += "Do you want be a Messi?\n";
                break;
            case "boxing":
                message += "Do you want be a Usyk?.\n";
                break;
            case "racer":
                message += "Do you want be a Shumacher?.\n";
                break;
            default:
                message += `Your favourite sport ${sport}\n`;
                break;
        }

}

alert(message);








const birthday = prompt("Enter your birth year:");
const city = prompt("Enter your city:");
const sport = prompt("Enter your favourite sport:");

let message = "";


if (birthday) {
    const age = Number(birthday);
    message += `Your age: ${age}\n`;
} else {
    message += "Too bad you didn't enter your birth year.\n";
}


if (city) {
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
} else {
    message += "Too bad you didn't enter your city.\n";
}


if (sport) {
    const champions = {
        football: "Messi",
        boxing: "Usyk",
        tennis: "Djokovic"
    };
    const champ = champions[sport];
    if (champ) {
        message += `Cool! Do you want to become like ${champ}?`;
    } else {
        message += `Your favorite sport is ${sport}.`;
    }
} else {
    message += "Too bad you didn't enter your favorite sport.";
}

alert(message);








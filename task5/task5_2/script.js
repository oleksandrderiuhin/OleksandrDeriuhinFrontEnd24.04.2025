// const uahCurrencies = 1;
// const usdCurrencies = 41;
// const eurCurrencies = 46;

let again = true;

while (again) {
    let currency = prompt("Enter currency (uah, usd, euro):").toLowerCase();

    let rate;
    let symbol;

    if (currency === "uah") {
        rate = 41;
        symbol = "₴";
    }else if (currency === "euro") {
        rate = 0.89;
        symbol = "€";
    } else if (currency === "usd") {
        rate = 1;
        symbol = "$";
    } else {
        alert("Invalid currency!");
        continue;
    }

    let answer = "";
    for (let dollars = 10; dollars <= 100; dollars += 10) {
        let value = dollars * rate;
        answer += `${dollars}$ = ${value}${symbol}\n`;
    }

    alert(answer);

    again = confirm("Do you want to convert another currency?");
}

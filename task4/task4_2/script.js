 const str = prompt("Enter 3 digit number:");

 const number = Number(str);

if (number >= 100 && number <= 999 && !isNaN(number) && str.length === 3) {

    const digit1 = Math.floor(number / 100);
    const digit2 = Math.floor((number % 100) / 10);
    const digit3 = number % 10;


    const allSame = digit1 === digit2 && digit2 === digit3;


    const hasSame = digit1 === digit2 || digit2 === digit3 || digit1 === digit3;

    console.log("All the same number? " + allSame);
    console.log("There are identical numbers among the numbers? " + hasSame);

} else {
    console.log("Please , write 3-digits number!");
}


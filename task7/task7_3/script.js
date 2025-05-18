function getNumber() {
    let input;
    let iterations = 0;

    while (iterations < 10) {
        input = prompt("Введіть число більше 100:");


        if (input === null || isNaN(input)) {
            console.log("Останнє введення: " + input);
            return;
        }


        let number = Number(input);


        if (number > 100) {
            console.log("Останнє введення: " + number);
            return;
        }


        alert("Число має бути більше 100! Спробуйте ще раз.");
        iterations++;
    }


    console.log("Останнє введення: " + input);
}

getNumber();
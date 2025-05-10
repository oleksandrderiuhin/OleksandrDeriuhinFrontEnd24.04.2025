const digit = Number(prompt("Enter a digit:"));



if(isNaN(digit) || digit< 1 || digit> 100){

    alert("Enter correct digit:");

}else{
    let result = "";

    for (let n = 1; n <= 100; n++) {
        if (n * n <= digit) {
            result += n + "\n";
        } else {
            break;
        }
    }

    alert("Numbers whose squares do not overlap DIGIT:\n" + result);


}



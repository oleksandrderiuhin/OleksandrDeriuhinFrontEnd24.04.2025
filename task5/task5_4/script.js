let again = true;

while (again) {
    let input = prompt("Enter integer N:");

    if (input === null) break;

    let N = Number(input);

    if (isNaN(N)) {
        alert("Please enter correct digit.");
        continue;
    }

    let isPrime = true;

    if (N <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(N); i++) {
            if (N % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        alert(`${N} — this is easy digit.`);
    } else {
        alert(`${N} — this is not easy digit.`);
    }

    again = confirm("Do you want to check another digit?");
}

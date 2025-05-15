const array = [{}, 1, 2, 3, 4, 5, 6, "string", null];

function foo(array) {
    const numbers = array.filter(Number.isFinite);
    if (!numbers.length) return 0;

    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }

    return sum / numbers.length;
}

const result = foo(array);

console.log(result); // Виведе: 3.5
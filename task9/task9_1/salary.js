const companies = {
    sales: [
        { name: "John", salary: 1000 },
        { name: "Alice", salary: 600 },
        { name: "Bob", salary: 1200 },
    ],
    development: {
        web: [
            { name: "Peter", salary: 2000 },
            { name: "Alex", salary: 1800 },
            { name: "Max", salary: 600 },
        ],
        internals: [{ name: "Jack", salary: 1300 }],
    },
};

function totalSales(companies){
    let sum = 0;

    for (let department in companies) {
        const value = companies[department];


        if (Array.isArray(value)) {
            sum += value.reduce((acc, employee) => acc + employee.salary, 0);
        }

        else if (typeof value === 'object') {
            sum += totalSales(value);
        }
    }

    return sum;
}

const total = totalSales(companies);
console.log(total);
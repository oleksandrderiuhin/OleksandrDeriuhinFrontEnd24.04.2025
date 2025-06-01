function User(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;


    this.getInfo = function () {
        console.log(`Ім'я: ${this.name}`);
        console.log(`Вік: ${this.age}`);
        console.log(`Місце проживання: ${this.location}`);
    };
}

const user1 = new User("Олена", 28, "Київ");

user1.getInfo();

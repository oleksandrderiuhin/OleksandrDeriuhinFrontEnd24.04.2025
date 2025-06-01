function User(name, age, location) {
   this.name= name;
   this.age = age;
   this.location = location;
}

User.prototype.getInfo = () => {
    return {
        name: this.name,
        age: this.age,
        location: this.location,
    };
};

const user = new User();

console.log(user.getInfo());
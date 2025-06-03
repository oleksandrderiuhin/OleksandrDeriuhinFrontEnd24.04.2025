const contacts = [
    {
        id: 1,
        name: "Serhii",
        phone: "+380999999999",
        email: "example@email.com",
    },
];


function Contact({ id, name, phone, email }) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
}


function Book(contacts) {
    this.contacts = contacts;
}


Book.prototype.find = function (id) {
    return this.contacts.find(contact => contact.id === id);
};


Book.prototype.add = function (contact) {
    const newContact = new Contact(contact);
    this.contacts.push(newContact);
    console.log(`Контакт ${newContact.name} додано.`);
};


Book.prototype.remove = function (id) {
    const index = this.contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        const removed = this.contacts.splice(index, 1)[0];
        console.log(`Контакт ${removed.name} видалено.`);
    } else {
        console.log(`Контакт з id ${id} не знайдено.`);
    }
};


Book.prototype.update = function (id, updatedData) {
    const contact = this.find(id);
    if (contact) {
        Object.assign(contact, updatedData);
        console.log(`Контакт ${contact.name} оновлено.`);
    } else {
        console.log(`Контакт з id ${id} не знайдено.`);
    }
};


const mappedContacts = contacts.map(el => new Contact(el));


const book = new Book(mappedContacts);


book.add({ id: 2, name: "Olena", phone: "+380981112233", email: "olena@email.com" });
console.log(book.find(2));
book.update(2, { phone: "+380987654321" });
book.remove(1);

console.log(book);

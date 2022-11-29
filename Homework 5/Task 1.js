class Name {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person = new Name('John', 'Dorian');

Name.prototype.fullName = function () {
    return `${person.firstName} ${person.lastName}`;
}

console.log(person.fullName());

Name.prototype.initials = function () {
    return `${person.firstName[0]}.${person.lastName[0]}`;
}

console.log(person.initials());
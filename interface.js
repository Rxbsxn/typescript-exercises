function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Typical", lastName: "Juzer" };
document.body.innerHTML = greeter(user);

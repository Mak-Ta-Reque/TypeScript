function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob");
var result2 = buildName("Bob", "Merly");
console.log(result1);
console.log(result2);

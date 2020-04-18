function buildName(firstName: String, lastName?: String){
    if (lastName) return firstName + " " + lastName;
    else return firstName;
}

let result1 = buildName("Bob");
let result2 = buildName("Bob", "Merly");

console.log(result1);
console.log(result2);
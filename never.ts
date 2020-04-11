// We can use it throwing exception.

function error(message: string) : never {
    throw new Error(message);

}

console.log(error("Never type"))
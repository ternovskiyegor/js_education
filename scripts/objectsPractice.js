let user = {};

user.name = 'John';
user.surname = 'Smith';

console.log(user);

user.name = 'Pete';

console.log(user);

delete user.name;

console.log(user);

console.log( isEmpty(user));

let obj1 = {
    apples: 5,
    melons: 2,
    lemons: 2,
    bag: 'MyBag'
};

sumOfKeys(obj1);

console.log(obj1);

multiplyNumeric(obj1);

console.log(obj1);

function isEmpty (obj) {
    let amount = 0;
    for (let k in obj) {
        amount++;
    }
    if (amount === 0) {
        return true;
    } else {
        return false;
    }
}

function sumOfKeys (obj) {
    let sum = 0;
    for (let k in obj) {
        sum += obj[k];
    }
    console.log(`Sum of object keys: ${sum}.`);
}

function multiplyNumeric (obj) {
    for (let k in obj) {
        if (typeof obj[k] == "number") {
            obj[k] *= 2;
        }
    }
}

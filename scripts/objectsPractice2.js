// Глубокое клонирование объекта 

let user = {
    name: 'Vasyl',
    params: {
        weight: 70,
        height: 160
    }
};

printUser(user);

let clone = {};

deepCopyObj(user, clone);

clone.name ='Pete';
clone.params.weight = 90;

user.params.height = 170;

printUser(user);
printUser(clone);

function printUser(obj) {
    console.log(`Name: ${obj.name}, weight: ${obj.params.weight}, heigth: ${obj.params.height}`);
}

function deepCopyObj (obj, clone) {
    for (let k in obj) {
        if (typeof user[k] == 'object') {
            clone[k] = Object.assign({}, obj[k]);
        } else {
            clone[k] = obj[k];
        }
    }
}
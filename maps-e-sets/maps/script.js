function getAdmins(map){
    let admins = [];
    for([key, value] of map.entries()){
        if(value === 'Admin'){
           admins.push(key); 
        }
    }
    return admins;
}

const users = new Map();

users.set('Ysmael', 'Admin');
users.set('Juan', 'User');
users.set('Pedro', 'User');
users.set('Maria', 'User');
users.set('Marques', 'Admin');

console.log(getAdmins(users));
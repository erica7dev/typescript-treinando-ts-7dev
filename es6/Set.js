let roles = new Set();

roles.add('paçoca')
roles.add('joaninha')
roles.add('zezinho')

for(let role of roles){
    console.log(role);
}
roles.forEach((role) => console.log(role.toLowerCase()));
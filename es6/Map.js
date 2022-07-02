let cozinha = { objeto: 'Geladeira' },
  sala = { objeto: 'TV' },
  quarto = { objeto: 'Cama' };

let userRoles = new Map([
  [cozinha, 'joaninha'],
  [sala, 'zezinho'],
  [quarto, 'jão']
]);

userRoles.set(cozinha, 'gertrudes');
userRoles.get(quarto)


console.log(userRoles.size);

//percorre o map
for (const user of userRoles.keys()) {
  console.log(user.objeto);
}
 
//outra forma - chave e valor
userRoles.forEach((role, user) => console.log(`${user.objeto}: ${role}`));


userRoles.has(cozinha);

userRoles.delete(cozinha);

let roles = [...userRoles.values()];
console.log(roles);
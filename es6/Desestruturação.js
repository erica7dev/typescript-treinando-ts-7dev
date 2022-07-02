function getAges() {
  return [23, 56, 78, 12, 3]
}

let feijoada = {
  Tempero: 'Louro e Agrião',
  Feijao: 'Preto',
  Preparo: 30
};

let { Tempero, Feijao, middleName = '', Preparo: time = 18 } = feijoada;

console.log(feijoada); // ''
console.log(time); // 30
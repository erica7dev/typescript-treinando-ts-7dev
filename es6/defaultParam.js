function getNumbers(n1, n2, n3=3, n4=n1*n2){
  console.log(arguments.length);
  return n1 + n2 + n3 + n4;
}
//também é válido passar function no parametro

function acordaPedrinho() {
  return "Acordou";
}


console.log(getNumbers(1,2));//6
console.log(getNumbers(1,2,4,5));//9

function genMultiplicationTable(n){
  if(typeof n !== "number") {
    return "Input harus tipe number atau number positif";
  }

  if(n <= 0 ) {
    return "Input harus tipe number atau number positif";
  }

   for(let i = 1; i <= n; i++){
    let x = i;
    let sum = i;

    for(let j = 1; j < n; j++){
     sum += i
     x +=` ${sum}`
   }
  
  console.log(x);
 }
}
genMultiplicationTable(5);
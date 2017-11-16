
function add() {
  //Get the value from the two input type texts
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;

  //Add the two numbers together
  var sum = Number(num1) + Number(num2);
  console.log(num1);
  console.log(num2);

  //Out the value to the screen replacing output
  document.getElementById('test').innerHTML=sum;
  //document.write(sum);
}

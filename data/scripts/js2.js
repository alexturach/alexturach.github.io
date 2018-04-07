
window.onload = function () {
  fnc();
}
function fnc (){
  var a = prompt("1+1=?", 0);
  if (a==2) {
    var yes = confirm ("You are right! Next question?");
    if (yes==true) {
      factor();
    }
  }
  else if (a==null)  {confirm.close();}
  else  {
    var no = confirm ("Wrong answer. Try again?");
    if (no==true) {
      fnc();
    }
  }
}
function factor(){
  var rnd = Math.floor(Math.random() * 20) + 1;
  var fact=1;
  var i=1;
  while (i<rnd) {
    fact*=i;
    i++
  }
  var c = prompt("f("+rnd+")=?");
  if (c==fact) {
    var yep = confirm ("You are right! Next question?");
    if (yep==true) {
      fnc();
    }
  }
  else if (c==null)  {confirm.close();}
  else {
    var nop = confirm ("Wrong answer. Try again?");
    if (nop==true) {
      fnc();
    }
  }
}

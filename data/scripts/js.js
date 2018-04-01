window.onload = function () {
  var btn_id = document.getElementById('btn1');
function fnc ()
{
  var a, b, c, d;
  a = prompt("Write first number:", 0);
  b = prompt("Write secont number:", 0);
  c = parseInt(a)+parseInt(b);
  d = isNaN(c);
  if (d == true)
  {
    alert("Please, write TWO numbers!");
  }
  else {
    alert(c);
  }
}
btn_id.onclick = function() {
  fnc();
}
}

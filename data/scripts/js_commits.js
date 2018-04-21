
window.onload = function () {


  document.getElementById('push').onclick = alert;
}
/*
  document.getElementById('push').addEventListener = ("click", alert);
*/


function alert() {
  var submit =  confirm('Опубликовать комментарий?')
    if (submit == true) {
      var a, b, c;
     a = document.getElementById('name').value;
     b = document.getElementById('email').value;
     c = document.getElementById('text').value;;
    push(a, b, c);
  }
  else {
  }
}


function push (name, mail, text) {
var qq = document.getElementById('qq');
var div = document.createElement('div');
div.setAttribute("id", "commits")
qq.appendChild(div);
var strong = document.createElement('strong');
div.appendChild(strong);
/* Добавление Имени */
var a = document.createElement('a');
a.setAttribute("href", "mail");
a.innerHTML = name;
strong.appendChild(a);
/* Добавление кнопки */
var button = document.createElement('button');
button.setAttribute("disabled", "");
button.innerHTML= "Редактировать";
button.className = "newBtn";
div.appendChild(button);
/* Добавление кнопки Удалить */
var button = document.createElement('button');
button.innerHTML= "Удалить";
button.setAttribute("type", "reset");
button.className = "newBtn";
div.appendChild(button);
button.onclick = fnc;
/* Добавление текста */
var p = document.createElement('p');
p.innerHTML = text;
div.appendChild(p);
/* Ф-ция удаления */
function fnc (event) {
  var ans = confirm('Удалить?')
  if (ans==true) {
    qq.removeChild(div)
  }
  else {
    event.preventDefault();
  }
}
}

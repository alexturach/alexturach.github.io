
window.onload = function () {
var picture, title, descriptioon, actors, year, cost, imdb, country;
picture = ['data/img/img1.jpg', "data/img/img2.jpg", "data/img/img3.jpg"];
title = ["Властелин колец: Возвращение короля", "Властелин колец: Две крепости", "Властелин колец: Братство кольца"];
descriptioon = ["Последняя часть трилогии о Кольце Всевластия и о героях, взявших на себя бремя спасения Средиземья. Повелитль сил Тьмы Саурон направляет свои бесчисленные рати под стены Минас-Тирита, Крепости Последней Надежды.", "Братство распалось, но Кольцо Всевластья должно быть уничтожено. Фродо и Сэм вынуждены доверить свои жизни Голлуму, который взялся провести их к вратам Мордора. Громадная Армия Сарумана приближается: члены братства и их союзники готовы принять бой", "Сказания о Средиземье — это хроника Великой войны за Кольцо, войны, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал власть над всеми живыми тварями, но был обязан служить злу."];
actors = ["Элайджа Вуд, Вигго Мортенсен, Шон Эстин, Иэн МакКеллен, Орландо Блум, Доминик Монахэн, Билли Бойд, Энди Серкис, Миранда Отто, Бернард Хилл", "Элайджа Вуд, Шон Эстин, Орландо Блум, Вигго Мортенсен, Иэн МакКеллен, Доминик Монахэн, Миранда Отто, Джон Рис-Дэвис, Энди Серкис, Билли Бойд", "Элайджа Вуд, Иэн МакКеллен, Вигго Мортенсен, Шон Бин, Орландо Блум, Джон Рис-Дэвис, Иэн Холм, Шон Эстин, Билли Бойд, Доминик Монахэн"];
year = ['2003 ', "2002 ", "2001 "];
cost = ["$94 000 000, ", "$94 000 000, ", " $93 000 000, "];
imdb = ["8.90 (1 349 172) ", "8.70 (1 221 214) ", "8.80 (1 389 831) "];
country = "США ";

var i;
for (i=0; i<3; i++) {
var main = document.getElementsByTagName('main')[0];
var article = document.createElement('article');
main.appendChild(article);

var div = document.createElement('div');
div.className = "film-names";
article.appendChild(div);

var div = document.getElementsByClassName('film-names')[i];
var h1 = document.createElement('h1');
div.appendChild(h1);

var h1 = div.childNodes[0];
var a = document.createElement('a');
a.setAttribute("href", "page1.html");
a.setAttribute("target", "_blank");
a.innerHTML = title[i];
h1.appendChild(a);

var div = document.createElement('div');
div.className = "description";
article.appendChild(div);

var div = document.getElementsByClassName('description')[i];
var figure = document.createElement('figure');
div.appendChild(figure);

var figure = div.childNodes[0];
var img = document.createElement('img');
img.setAttribute("src", picture[i]);
var figcaption = document.createElement('figcaption');
figcaption.innerHTML = "Обложка фильма";
figure.appendChild(img);
figure.appendChild(figcaption);

var section = document.createElement('section');
div.appendChild(section);

var h1 = document.createElement('h1');
h1.innerHTML = "Описание";
section.appendChild(h1);
var p = document.createElement('p');
p.innerHTML = descriptioon[i];
section.appendChild(p);
var h1 = document.createElement('h1');
h1.innerHTML = "Актёры";
section.appendChild(h1);
var p = document.createElement('p');
p.innerHTML= actors[i];
section.appendChild(p);

var div = document.createElement('div');
div.className = "film-footer";
article.appendChild(div);

var p = document.createElement('p');
div.appendChild(p);
var strong = document.createElement('strong');
strong.innerHTML="Год: ";
p.appendChild(strong);
p.innerHTML += year[i];
var strong = document.createElement('strong');
strong.innerHTML="Оценка ";
p.appendChild(strong);
var abbr = document.createElement('abbr');
abbr.innerHTML="IMDb: ";
abbr.setAttribute("title", "");
abbr.setAttribute("data-tooltip", "The Internet Movie Database");
strong.appendChild(abbr);
p.innerHTML += imdb[i];
strong.innerHTML="Бюджет: ";
p.appendChild(strong);
p.innerHTML += cost[i];
strong.innerHTML="Страна: ";
p.appendChild(strong);
p.innerHTML += country;

}




}

// playCards
// cookDinner
// finishMathHomework      как правильно пишутся названия функций

// Very simple function
function callFriend(friendsName = "Bakyt") {
  console.log(friendsName);
  console.log('Pick up the phone');
  console.log('Type in the number of' + friendsName);      // так создается функция
  console.log('Press call');
  console.log('Wait for the answer');
}

// callFriend("Bakyt");
// callFriend("Akjol");
// callFriend("Seitek");   // выводит функцию , можно несколько раз вывести
// callFriend(); //undefined-незадано


function calculateRectArea(a, b) {
  console.log(a * b);
}

// calculateRectArea(5, 10);
// calculateRectArea(10, 15);
// calculateRectArea(50, 50); // функция которое считает


// вычисление обьем силиндра с помощью функции
function CalculateCylinderVolume(r, h) {
  return 3.14 * r * r * h;   // return - Оператор предназначен для    возвращения значения выражения в качестве результата выполнения функции. Значение выражения должно быть указано после ключевого слова return. function f () {return выражение;}.
}

var smallGlassVol = CalculateCylinderVolume(3, 4);
var bottleVol = CalculateCylinderVolume(3, 10);

// console.log(smallGlassVol);
// console.log(bottleVol)

// alert();
// confirm(); // тоже функции
// prompt();


// document.write("Hello!"); // - позволяет нам написать любой текст включая HTML и даже JS внутрь HTML файла
// document.write("World <br>"); // строчный элемент

// document.writeln("Bye world <br>");
// document.writeln("Goodbye world! <br>"); // будут каждая на своей линии , строке


// document.write("<h1>Hello world!</h1>"); //можно вставлять теги итд
// document.write("<p>Goodbye world</p>");

function countDown(number) {
  for (let i = number; i > 0; i--) {
    document.write(i + "");
  }
  document.write("<br>");
}
// countDown(10);
// countDown(15);
// countDown(prompt("Enter the number!", 100)); 

// Math.random();    // функция которая создает рандом число

// var number = Math.random();
// document.write(number * 100);       // случайное число


function randomColor() {
  var red = Math.random() * 255; // 0-1 0.1 * 255 = 25.5
  var blue = Math.random() * 255;
  var green = Math.random() * 255;
  return `rgb(` + red + `,` + green + `, ` + blue + `)`;
}
                                                           // рандомный цвет  текста

function colorfulText(text, color) {
  // var red = Math.random() * 255; // 0-1 0.1 * 255 = 25.5
  // var blue = Math.random() * 255;
  // var green = Math.random() * 255;
  document.write(`<h1 style="color: ` + color +`;"> ` + text + `</h1>`);
}
var color = randomColor();
colorfulText("Hllo world" , color);
colorfulText("Bye world", color);


// HW - создать 20 функций
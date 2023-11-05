// Задание 1

// Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.





// Задание 2
// Создайте класс Calculator, который создаёт объекты с конструктором, который запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта, и двумя методами:
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств


//   class Calculator {
//     constructor(number1, number2){
//     this.number1 = number1;  
//     this.number2 = number2;  
//     }

//     sum() {
      
//     return this.number1 + this.number2
// }

//     mul() {
//     return this.number1 * this.number2
    
// }}

// const newNumber = new Calculator(+prompt('Введите первое число'), +prompt('Введите второе число'));
// (newNumber.sum());
// (newNumber.mul());





/// Задание 3
// 1. Реализовать следующее мини-приложение https://gist.github.com/zhekix

class Logo {
    constructor(url) {
      this.top = 0;
      this.left = 0;
      this.width = 200;
      this.imgUrl = url;
      this.html = null;
    }

  init() {
    this.html = `<img src="${this.imgUrl}" alt="logo">`;
    this.render()
    document.body.style.backgroundColor = 'black';
  }
  render() {
    document.body.innerHTML = this.html;
    const img = document.querySelector('img');   
    img.style.position = 'fixed';
    img.style.top = `${this.top}px`;
    img.style.left = `${this.left}px`;
    img.style.width = `${this.width}px`;
  }
  moveUp() {
    this.top -= 5;
    this.render();
  }
  moveDown() {
    this.top += 5;
    this.render();
  }
  moveLeft() {
    this.left -= 5;
    this.render();
  }
  moveRight() {
    this.left += 5;
    this.render();
  }
}
const imgUrl = 'https://bit.ly/2tcDito';
const mfLogotip = new Logo(imgUrl);



mfLogotip.init();
const moveRight = setInterval(() => {
  mfLogotip.moveRight();
  mfLogotip.moveDown();
}, 50);
setTimeout(() => {
  clearInterval(moveRight)}, 900);
// mfLogotip.moveRight();
// mfLogotip.moveRight();
// mfLogotip.moveRight();
// mfLogotip.moveRight();
// mfLogotip.moveDown();
// mfLogotip.moveDown();
// mfLogotip.moveDown();
// mfLogotip.moveDown();

// 2. Добавить к приложению желтый круг (пример ЗДЕСЬ)

// Реализовать с помощью класса Circle, который принимает аргументы size (ширина и высота фигуры), color (цвет фигуры). При вызове метода render() из экземпляра класса Circle должен отрисоваться круг с заданными стилями.


class Circle {
    constructor(size, color) {
    this.width = size;
    this.height = size;
    this.color = color;
  
    }
    render(){
        const div = document.createElement('div');
        div.style.width = `${this.width}px`;
        div.style.height = `${this.height}px`;
        div.style.backgroundColor = this.color;
        div.style.borderRadius = `50%`;
        document.body.append(div);
    }}    
        
  const circle = new Circle(100, 'yellow')
  
  
  circle.render();


// 1. Необходимо создать класс кнопки, где будут соблюдены следующие условия
// (условие задачи ниже написано на псевдокоде с разъяснениями по работе отдельных
// сущностей):
// class Button {
// // поля класса:
// constructor(id, label, user)
// // методы класса:
// onClick:
// // выводит в консоль имя пользователя
// render:
// // создает кнопку и присваивает ей id и label из конструктора класса
// // присваивает ей обработчик события onClick (метод класса)
// // возвращает созданную кнопку
// }




class Button {
    constructor(id, label, user) {
        this.id = id;
        this.label = label;
        this.user = user;
    }

    onClick() {
        console.log(this.user);
    }

    render() {
        const btn = document.createElement('button');
        btn.id = this.id;
        btn.innerHTML = `${this.label}`;
        btn.onclick = () => {
            this.onClick()
        };
        container.append(btn);
    }
}



// 2. Далее необходимо в цикле пройтись по массиву ниже и добавить в контейнер
// кнопки, создав каждую через указанный выше класс, присвоив им id, label и user из
// объекта. Каждой кнопке внутри класса должен быть присвоен обработчик события
// onClick:
const data = [
{ id: 1, label: "Button 1", user: { name: "Pit" } },
{ id: 2, label: "Button 2", user: { name: "Jane" } },
{ id: 3, label: "Button 3", user: { name: "Kyle" } }
];
// Контейнер нужно создать в html файле с указанным id, например:

const container = document.getElementById("app");





data.forEach(item => {
    const button = new Button(item.id, item.label, item.user.name)
    button.render();
})
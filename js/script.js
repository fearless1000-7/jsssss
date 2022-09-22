let name = 'Alex'
let balance = 100
let account = 7777

let searchName = prompt('Как вас зовут')

switch (searchName) {
    case name:
        let yourAccount = +prompt('Номер банковского счета ?')
        switch (yourAccount) {
            case account:
                let howMuch = +prompt('Сколько обналичить')
                if (howMuch <= 100) {
                console.log('обналичивание денег прошла успешно');
                console.log('Ваш баланс =', balance - howMuch);
                  
             } else {
            console.log('Не дoстаточно средств');
        } 
    }

break;
default:
console.log('oшибка');
}

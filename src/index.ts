import { MyFirstClass } from './class/myFirstClass';

let a = new MyFirstClass();
console.log(a.calc());


/*
* Тут вопрос такой:
* ты написал что функция уже должна по вызову вернуть объект
* у меня по сути возвращает промис а не объект сразу из-за async await
*
* если не использовать async await а просто Promise.all тогда либо его возврщать что тоже самое
* либо непонятно, ведь надо дождаться результата а только потом вернуть объект - вообщем норм ли я сделал так?
* */
a.getApi()
    .then((result) => {
        console.log('Well done! See res: ', result)
    })
    .catch(e => {
        throw new Error('Bad request! See res: ' + e)
    })
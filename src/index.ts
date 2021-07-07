import { MyFirstClass } from './class/myFirstClass';

let a = new MyFirstClass();

a.getApi()
    .then((result) => {
        console.log('Well done! See res: ', result)
    })
    .catch((e) => {
        throw new Error(`Bad request! See res: ${e}`)
    })

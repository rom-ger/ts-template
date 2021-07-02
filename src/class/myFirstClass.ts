import { JSONPlaceholder } from '../actions/jsonplaceholderActions'

class MyFirstClass {
    a: number;

    constructor() {
        this.a = 3;
    }

    calc() {
        return this.a + 3;
    }

    async getApi() {
        /*
        * здест не уверен, что так хорошо писать interface внутри функции
        * более того, сейчас интерфейс описан так,  ключ строка а значение объект
        * я пытался конкретно указать через | IPost | IUser и импортировать, но кажется это плохо
        * поскольку в двух файлах получается импорты этих интерефейсов
        * да и сам TS ругается в таком случае на это ----> res[resp.resource] = resp.json
        * */
        interface IResult {
            [key: string]: object
        }

        let res: IResult = {};

        await Promise.all([
            JSONPlaceholder.getPosts(),
            JSONPlaceholder.getComments(),
            JSONPlaceholder.getAlbums(),
            JSONPlaceholder.getPhotos(),
            JSONPlaceholder.getTodos(),
            JSONPlaceholder.getUsers(),
        ]).then(responses => {
            return Promise.all(responses.map(resp => {
                res[resp.resource] = resp.json
            }))
        })

        return res
    }
}

export { MyFirstClass };

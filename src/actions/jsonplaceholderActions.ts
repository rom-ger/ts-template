import { IPost } from '../interfaces/IPost'
import { IComment } from '../interfaces/IComment'
import { IAlbum } from '../interfaces/IAlbum'
import { IPhoto } from '../interfaces/IPhoto'
import { ITodo } from '../interfaces/ITodo'
import { IUser } from '../interfaces/IUser'


class JSONPlaceholder {
    private static url: string = 'https://jsonplaceholder.typicode.com'

    static getPosts(): Promise<{ json: IPost[], resource: string }> {
        return fetch(`${JSONPlaceholder.url}/posts`)
            .then(response => response.json())
            /*
            изначально просто возвращал json (ниже). затем встал вопрос,
            а как я буду складывать динамически в нужные поля в итоговый объект результат
            поэтому я решил возвращать объект с полем, по которому в итоге смогу понять
            что это за ответ. Тут сомнения, что так делать верно
            * */
            .then(json => ({ json, resource: 'posts' }))
    }

    static getComments(): Promise<{ json: IComment[], resource: string }> {
        return fetch(`${JSONPlaceholder.url}/comments`)
            .then(response => response.json())
            .then(json => ({ json, resource: 'comments' }))
    }

    static getAlbums(): Promise<{ json: IAlbum[], resource: string }> {
        return fetch(`${JSONPlaceholder.url}/albums`)
            .then(response => response.json())
            .then(json => ({ json, resource: 'albums' }))
    }

    static getPhotos(): Promise<{ json: IPhoto[], resource: string }> {
        return fetch(`${JSONPlaceholder.url}/photos`)
            .then(response => response.json())
            .then(json => ({ json, resource: 'photos' }))
    }

    static getTodos(): Promise<{ json: ITodo[], resource: string }> {
        return fetch(`${JSONPlaceholder.url}/todos`)
            .then(response => response.json())
            .then(json => ({ json, resource: 'todos' }))
    }

    static getUsers(): Promise<{ json: IUser[], resource: string }> {
        return fetch(`${JSONPlaceholder.url}/users`)
            .then(response => response.json())
            .then(json => ({ json, resource: 'users' }))
    }
}

export { JSONPlaceholder }


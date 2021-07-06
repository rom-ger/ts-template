import { IPost } from '../interfaces/IPost'
import { IComment } from '../interfaces/IComment'
import { IAlbum } from '../interfaces/IAlbum'
import { IPhoto } from '../interfaces/IPhoto'
import { ITodo } from '../interfaces/ITodo'
import { IUser } from '../interfaces/IUser'


class JSONPlaceholder {
    private static url: string = 'https://jsonplaceholder.typicode.com'

    static getPosts(): Promise<IPost[]> {
        return fetch(`${JSONPlaceholder.url}/posts`)
            .then(response => response.json())
    }

    static getComments(): Promise<IComment[]> {
        return fetch(`${JSONPlaceholder.url}/comments`)
            .then(response => response.json());
    }

    static getAlbums(): Promise<IAlbum[]> {
        return fetch(`${JSONPlaceholder.url}/albums`)
            .then(response => response.json())
    }

    static getPhotos(): Promise<IPhoto[]> {
        return fetch(`${JSONPlaceholder.url}/photos`)
            .then(response => response.json())
    }

    static getTodos(): Promise<ITodo[]> {
        return fetch(`${JSONPlaceholder.url}/todos`)
            .then(response => response.json())
    }

    static getUsers(): Promise<IUser[]> {
        return fetch(`${JSONPlaceholder.url}/users`)
            .then(response => response.json())
    }
}

export { JSONPlaceholder };



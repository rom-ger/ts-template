import { BaseActions } from '../actions/baseActions'
import { IPost } from '../interfaces/IPost'
import { IComment } from '../interfaces/IComment'
import { IAlbum } from '../interfaces/IAlbum'
import { IPhoto } from '../interfaces/IPhoto'
import { ITodo } from '../interfaces/ITodo'
import { IUser } from '../interfaces/IUser'

export interface IJSONPlaceholder {
    getPosts: () => Promise<IPost[]>;
    getComments: () => Promise<IComment[]>;
    getAlbums: () => Promise<IAlbum[]>;
    getPhotos: () => Promise<IPhoto[]>;
    getTodos: () => Promise<ITodo[]>;
    getUsers: () => Promise<IUser[]>;
}

class JSONPlaceholder extends BaseActions implements IJSONPlaceholder {
    constructor() {
        super('https://jsonplaceholder.typicode.com');
    }

    getPosts(): Promise<IPost[]> {
        return this.getAction<IPost[]>('/posts');
    }

    getComments(): Promise<IComment[]> {
        return this.getAction<IComment[]>('/comments');
    }

    getAlbums(): Promise<IAlbum[]> {
        return this.getAction<IAlbum[]>('/albums');
    }

    getPhotos(): Promise<IPhoto[]> {
        return this.getAction<IPhoto[]>('/photos');
    }

    getTodos(): Promise<ITodo[]> {
        return this.getAction<ITodo[]>('/todos');
    }

    getUsers(): Promise<IUser[]> {
        return this.getAction<IUser[]>('/users');
    }
}

export { JSONPlaceholder };



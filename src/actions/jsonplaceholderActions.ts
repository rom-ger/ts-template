import { BaseActions } from '../actions/baseActions'
import { IPostDTO, Post } from '../models/Post';
import { IAlbumDTO, Album } from '../models/Album'
import { ICommentDTO, Comment } from '../models/Comment'
import { IPhototDTO, Photo } from '../models/Photo'
import { ITodoDTO, Todo } from '../models/Todo'
import { IUserDTO, User } from '../models/User'

export interface IJSONPlaceholder {
    getPosts: () => Promise<Post[]>;
    getAlbums: () => Promise<Album[]>;
    getComments: () => Promise<Comment[]>;
    getPhotos: () => Promise<Photo[]>;
    getTodos: () => Promise<Todo[]>;
    getUsers: () => Promise<User[]>;
}

class JSONPlaceholder extends BaseActions implements IJSONPlaceholder {
    constructor() {
        super('https://jsonplaceholder.typicode.com');
    }

    getPosts(): Promise<Post[]> {
        return this.getAction<IPostDTO[]>('/posts')
            .then(dtos => dtos.map(dto => new Post(dto)));
    }

    getAlbums(): Promise<Album[]> {
        return this.getAction<IAlbumDTO[]>('/albums')
            .then(dtos => dtos.map(dto => new Album(dto)));
    }

    getComments(): Promise<Comment[]> {
        return this.getAction<ICommentDTO[]>('/comments')
            .then(dtos => dtos.map(dto => new Comment(dto)));
    }

    getPhotos(): Promise<Photo[]> {
        return this.getAction<IPhototDTO[]>('/photos')
            .then(dtos => dtos.map(dto => new Photo(dto)));
    }

    getTodos(): Promise<Todo[]> {
        return this.getAction<ITodoDTO[]>('/todos')
            .then(dtos => dtos.map(dto => new Todo(dto)));
    }

    getUsers(): Promise<User[]> {
        return this.getAction<IUserDTO[]>('/users')
            .then(dtos => dtos.map(dto => new User(dto)));
    }
}

export { JSONPlaceholder };

import { BaseActions } from '../actions/baseActions'
// import { IPost } from '../interfaces/IPost'
import { IPostDTO, IPost, Post } from '../models/Post';
import { IAlbumDTO, IAlbum, Album } from '../models/Album'
import { ICommentDTO, IComment, Comment } from '../models/Comment'
import { IPhototDTO, IPhoto, Photo } from '../models/Photo'
import { ITodoDTO, ITodo, Todo } from '../models/Todo'
import { IUser } from '../interfaces/IUser'

export interface IJSONPlaceholder {
    getPosts: () => Promise<Post[]>;
    getAlbums: () => Promise<Album[]>;
    getComments: () => Promise<Comment[]>;
    getPhotos: () => Promise<Photo[]>;
    getTodos: () => Promise<Todo[]>;
    getUsers: () => Promise<IUser[]>;
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
            .then(dtos => dtos.map(dto => new Album(dto)))
    }

    getComments(): Promise<IComment[]> {
        return this.getAction<IComment[]>('/comments');
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



import { JSONPlaceholder } from '../actions/jsonplaceholderActions';
import { IComment } from '../interfaces/IComment';
import { IPost } from '../interfaces/IPost';
import { IAlbum } from '../interfaces/IAlbum';
import { IPhoto } from '../interfaces/IPhoto';
import { ITodo } from '../interfaces/ITodo';
import { IUser } from '../interfaces/IUser';

interface IGetApi {
    posts: IPost[];
    comments: IComment[];
    albums: IAlbum[];
    photos: IPhoto[];
    todos: ITodo[];
    users: IUser[];
}

interface IMyFirstClass {
    getApi: () => Promise<IGetApi>;
}

class MyFirstClass implements IMyFirstClass {
    constructor() {
    }

    getApi = async () => {
        let res: IGetApi = {
            posts: [],
            comments: [],
            albums: [],
            photos: [],
            todos: [],
            users: [],
        };

        await Promise.all([
            JSONPlaceholder.getPosts()
                .then(posts => res.posts = posts),
            JSONPlaceholder.getComments()
                .then(comments => res.comments = comments),
            JSONPlaceholder.getAlbums()
                .then(albums => res.albums = albums),
            JSONPlaceholder.getPhotos()
                .then(photos => res.photos = photos),
            JSONPlaceholder.getTodos()
                .then(todos => res.todos = todos),
            JSONPlaceholder.getUsers()
                .then(users => res.users = users),
        ]);

        return res;
    }
}

export { MyFirstClass };


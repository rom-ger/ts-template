import { JSONPlaceholder, IJSONPlaceholder } from '../actions/jsonplaceholderActions';
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

const JSONPlaceholderActions: IJSONPlaceholder = new JSONPlaceholder();

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
            JSONPlaceholderActions.getPosts()
                .then(posts => res.posts = posts),
            JSONPlaceholderActions.getComments()
                .then(comments => res.comments = comments),
            JSONPlaceholderActions.getAlbums()
                .then(albums => res.albums = albums),
            JSONPlaceholderActions.getPhotos()
                .then(photos => res.photos = photos),
            JSONPlaceholderActions.getTodos()
                .then(todos => res.todos = todos),
            JSONPlaceholderActions.getUsers()
                .then(users => res.users = users),
        ]);

        return res;
    }
}

export { MyFirstClass };


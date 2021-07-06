import { JSONPlaceholder, IJSONPlaceholder } from '../actions/jsonplaceholderActions';
import { Comment } from '../models/Comment';
import { Post } from '../models/Post';
import { Album } from '../models/Album';
import { Photo } from '../models/Photo';
import { ITodoDTO, ITodo, Todo } from '../models/Todo';
import { IUser } from '../interfaces/IUser';

interface IGetApi {
    posts: Post[];
    comments: Comment[];
    albums: Album[];
    photos: Photo[];
    todos: Todo[];
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


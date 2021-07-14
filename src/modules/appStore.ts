import { action, observable } from 'mobx';
import { MyFirstClass } from './class/myFirstClass';
import { Comment } from './models/Comment';
import { Post } from './models/Post';
import { Album } from './models/Album';
import { Photo } from './models/Photo';
import { Todo } from './models/Todo';
import { User } from './models/User';

const a = new MyFirstClass();

export interface IAppStore {
    posts: Post[];
    comments: Comment[];
    albums: Album[];
    photos: Photo[];
    todos: Todo[];
    users: User[];
    error: string | null;
    loading: boolean;
    getData: () => void;
}

class AppStore implements IAppStore {
    @observable posts: Post[];
    @observable comments: Comment[];
    @observable albums: Album[];
    @observable photos: Photo[];
    @observable todos: Todo[];
    @observable users: User[];
    @observable error: string | null;
    @observable loading: boolean;

    constructor() {
        this.posts = [];
        this.comments = [];
        this.albums = [];
        this.photos = [];
        this.todos = [];
        this.users = [];
        this.error = null;
        this.loading = false;
    }

    @action('get data')
    getData = () => {
        this.loading = true;
        a.getApi()
            .then((res) => {
                this.posts = res.posts;
                this.comments = res.comments;
                this.albums = res.albums;
                this.photos = res.photos;
                this.todos = res.todos;
                this.users = res.users;
            })
            .catch((e) => {
                this.error = e.message;
            })
            .finally(() => {
                this.loading = false;
            });
    }
}

const appStore = new AppStore();

export default appStore;
export { AppStore };

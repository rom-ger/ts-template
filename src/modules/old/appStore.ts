import { action, observable, IObservableValue, computed, IValueDidChange, IComputedValue } from 'mobx';
import { MyFirstClass } from './class/myFirstClass';
import { Comment } from './models/Comment';
import { Post } from './models/Post';
import { Album } from './models/Album';
import { Photo } from './models/Photo';
import { Todo } from './models/Todo';
import { User } from './models/User';

const a = new MyFirstClass();

export interface IAppStore {
    postsObservable: IObservableValue<Post[]>;
    posts: Post[];
    comments: Comment[];
    albums: Album[];
    photos: Photo[];
    todos: Todo[];
    users: User[];
    error: string | null;
    loading: boolean;
    allLength: IComputedValue<number>;
    getData: () => void;
}

class AppStore implements IAppStore {
    @observable postsObservable: IObservableValue<Post[]>;
    @observable comments: Comment[];
    @observable albums: Album[];
    @observable photos: Photo[];
    @observable todos: Todo[];
    @observable users: User[];
    @observable error: string | null;
    @observable loading: boolean;
    @observable allLength: IComputedValue<number>;

    constructor() {
        this.postsObservable = observable.box<Post[]>([]);
        this.comments = [];
        this.albums = [];
        this.photos = [];
        this.todos = [];
        this.users = [];
        this.error = null;
        this.loading = false;

        this.allLength = computed(this.allLengthSelector);

        this.postsObservable.observe(this.changePostEpic);
        this.allLength.observe(this.changeAllLengthEpic);
    }

    @computed get posts() {
        return this.postsObservable.get();
    }

    @action('get data')
    getData = () => {
        this.loading = true;
        a.getApi()
            .then((res) => {
                this.postsObservable.set(res.posts);
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

    allLengthSelector = () => {
        return this.posts.length + this.comments.length + this.albums.length + this.photos.length + this.todos.length + this.users.length;
    }

    /**
     * Эпик на изменение posts
     */
    changePostEpic = (change: IValueDidChange<Post[]>) => {
        if (change.newValue.length !== change.oldValue?.length) {
            window.console.log('Количество элементов в posts изменилось');
        }
    }

    /**
     * Эпик на изменение allLength
     */
    changeAllLengthEpic = (change: IValueDidChange<number>) => {
        if (change.newValue !== change.oldValue) {
            window.console.log('Количество суммы элементов изменилось');
        }
    }
}

const appStore = new AppStore();

export default appStore;
export { AppStore };

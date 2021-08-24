import { action, observable, IObservableValue, IValueDidChange, computed } from 'mobx';
import { Directory } from '../models/Directory';
import { DirectoryActions } from '../actions/directoryActions';

export interface IDirectoreStore {
    rootDirectoriesObservable: IObservableValue<Directory[]>;
    rootDirectories: Directory[];
    childDirectoriesObservable: IObservableValue<Map<string, Directory[]>>;
    childDirectories: Map<string, Directory[]>;
    currentPathObservable: IObservableValue<string | null>;
    currentPath: string | null;
    currentDirectory: Directory[];
    getDirectories: (path: string | null) => void;
    setCurrentPath: (path: string | null) => void;
}

const directoryActions = new DirectoryActions();

class DirectoreStore implements IDirectoreStore {
    @observable rootDirectoriesObservable: IObservableValue<Directory[]>;
    @observable childDirectoriesObservable: IObservableValue<Map<string, Directory[]>>;
    @observable currentPathObservable: IObservableValue<string | null>;

    constructor() {
        this.rootDirectoriesObservable = observable.box<Directory[]>([]);
        this.childDirectoriesObservable = observable.box<Map<string, Directory[]>>(new Map());
        this.currentPathObservable = observable.box<string | null>(null);
        this.currentPathObservable.observe(this.changeCurrentPathhEpic);
    }

    @computed get rootDirectories() {
        return this.rootDirectoriesObservable.get();
    }

    @computed get childDirectories() {
        return this.childDirectoriesObservable.get();
    }

    @computed get currentPath() {
        return this.currentPathObservable.get();
    }

    @computed get currentDirectory() {
        if (!this.currentPath) {
            return this.rootDirectories;
        }
        return this.childDirectories.get(this.currentPath) || [];
    }

    @action('setCurrentPath')
    setCurrentPath = (path: string | null) => {
        this.currentPathObservable.set(path);
    }

    @action('get directories')
    getDirectories = (path: string | null) => {
        if (!path && !!this.rootDirectories.length) {
            return;
        }
        if (!!path && !!this.childDirectories.get(path)?.length) {
            return;
        }
        directoryActions.getDirectories(path)
            .then((res: Directory[]) => {
                if (!path) {
                    return this.rootDirectoriesObservable.set(res);
                }
                // this.childDirectories.set(path, res);
                let childDirectories = this.childDirectories;
                childDirectories.set(path, res);
                this.childDirectoriesObservable.set(childDirectories);
            });
    }

    /**
     * Эпик на изменение currentPath
     */
    changeCurrentPathhEpic = (change: IValueDidChange<string | null>) => {
        this.getDirectories(change.newValue);
    }
}

const directoreStore = new DirectoreStore();

export default directoreStore;
export { DirectoreStore };

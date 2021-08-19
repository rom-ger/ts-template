import { action, observable, IObservableValue, computed } from 'mobx';
import { Directory } from '../models/Directory';
import { DirectoryActions } from '../actions/directoryActions';

export interface IDirectoreStore {
    directoriesObservable: IObservableValue<Directory[]>;
    directories: Directory[];
    getDirectories: () => void;
}

const directoryActions = new DirectoryActions();

class DirectoreStore implements IDirectoreStore {
    @observable directoriesObservable: IObservableValue<Directory[]>;

    constructor() {
        this.directoriesObservable = observable.box<Directory[]>([]);
    }

    @computed get directories() {
        return this.directoriesObservable.get();
    }

    @action('get directories')
    getDirectories = () => {
        directoryActions.getDirectories()
            .then((res: Directory[]) => this.directoriesObservable.set(res));
    }
}

const directoreStore = new DirectoreStore();

export default directoreStore;
export { DirectoreStore };

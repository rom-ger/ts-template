import { action, observable, IObservableValue, IValueDidChange, computed } from 'mobx';
import { Variable } from '../models/Variable';
import { CodingActions } from '../actions/codingActions';

export interface ICodingStore {
    historyObservable: IObservableValue<object>;
    history: object;
    variablesObservable: IObservableValue<Variable[]>;
    variables: Variable[];
}

const codingActions = new CodingActions();

class CodingStore implements ICodingStore {
    @observable historyObservable: IObservableValue<object>;
    @observable variablesObservable: IObservableValue<Variable[]>;

    constructor() {
        this.historyObservable = observable.box<object>({});
        this.variablesObservable = observable.box<Variable[]>([]);
    }

    @computed get history() {
        return this.historyObservable.get();
    }

    @computed get variables() {
        return this.variablesObservable.get();
    }

    @action('executeCode')
    executeCode = (code: string | null) => {
        // тут непонятно как мы это должны из input тут получать
    };

    @action('getHistory')
    getHistory = (history: object | {}) => {
        this.historyObservable.set(history);
    };

    @action('getVariables')
    getVariables = (variables: Variable[] | []) => {
        this.variablesObservable.set(variables);
    };
}

const codingStore = new CodingStore();

export default codingStore;
export { CodingStore };

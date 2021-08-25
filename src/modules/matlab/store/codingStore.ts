import { action, observable, IObservableValue, computed } from 'mobx';
import { Variable } from '../models/Variable';
import { CodeRow } from '../models/CodeRow';
import { CodingActions } from '../actions/codingActions';

export interface ICodingStore {
    historyObservable: IObservableValue<CodeRow[]>;
    history: CodeRow[];
    variablesObservable: IObservableValue<Variable[]>;
    variables: Variable[];
}

const codingActions = new CodingActions();

class CodingStore implements ICodingStore {
    @observable historyObservable: IObservableValue<CodeRow[]>;
    @observable variablesObservable: IObservableValue<Variable[]>;

    constructor() {
        this.historyObservable = observable.box<CodeRow[]>();
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
        // так и не понял что тут делать надо
        codingActions.executeCurrentCode(code)
    };

    @action('getHistory')
    getHistory = () => {
        this.historyObservable.set(this.history);
    };

    @action('getVariables')
    getVariables = () => {
        this.variablesObservable.set(this.variables);
    };
}

const codingStore = new CodingStore();

export default codingStore;
export { CodingStore };

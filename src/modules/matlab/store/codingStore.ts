import { action, observable, IObservableValue, computed } from 'mobx';
import { Variable } from '../models/Variable';
import { CodeRow } from '../models/CodeRow';
import { CodingActions } from '../actions/codingActions';

export interface ICodingStore {
    historyObservable: IObservableValue<CodeRow[]>;
    history: CodeRow[];
    variablesObservable: IObservableValue<Variable[]>;
    variables: Variable[];
    executeCode: (code: string | null) => void;
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
        codingActions.executeCurrentCode(code)
            .then((dtos) => {
                this.getHistory();
                this.getVariables();
            })
            .catch(e => window.console.log('e', e))
    };

    @action('getHistory')
    getHistory = () => {
        codingActions.getCodingHistory()
            .then((history) => {
                window.console.log('history', history)
                this.historyObservable.set(history)
            });
    };

    @action('getVariables')
    getVariables = () => {
        codingActions.getAllVars()
            .then((vars) => {
                window.console.log('vars', vars)
                this.variablesObservable.set(vars)
            })
    };
}

const codingStore = new CodingStore();

export default codingStore;
export { CodingStore };

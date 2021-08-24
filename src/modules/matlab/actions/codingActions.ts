import { BaseActions } from '../../global/actions/baseActions';
import { IVariableDTO, Variable } from '../models/Variable';

interface ICodingActions {
    executeCurrentCode: (code: string | null) => Promise<string>;
    getDevHistory: () => Promise<object>;
    getAllVars: () => Promise<Variable[]>
}

class CodingActions extends BaseActions implements ICodingActions {
    constructor() {
        super('http://178.154.225.112:5000/');
    }

    executeCurrentCode(code: string | null): Promise<string> {
        return this.executeCode<string>(code ? code : '')
            .then(dtos => dtos);
    }

    getDevHistory(): Promise<object> {
        return this.getAction<object>('history')
            .then(dtos => dtos);
    }

    getAllVars(): Promise<Variable[]> {
        return this.getAction<IVariableDTO[]>('vars')
            .then(dtos => dtos.map(dto => new Variable(dto)));
    }
}

export { CodingActions, ICodingActions };

import { BaseActions } from '../../global/actions/baseActions';
import { IVariableDTO, Variable } from '../models/Variable';
import { CodeRow, ICodeRowDTO } from '../models/CodeRow';

interface IOutput {
    output: string;
}

interface ICodingActions {
    executeCurrentCode: (code: string | null) => Promise<IOutput>;
    getCodingHistory: () => Promise<CodeRow[]>;
    getAllVars: () => Promise<Variable[]>;
}

class CodingActions extends BaseActions implements ICodingActions {
    constructor() {
        super('http://localhost:5000');
    }

    executeCurrentCode(code: string | null): Promise<IOutput> {
        const formdata = new FormData();
        formdata.append('code', code || '');

        return this.postAction<BodyInit, IOutput>('/code_processing', formdata)
            .then(dtos => dtos);
    }

    getCodingHistory(): Promise<CodeRow[]> {
        return this.getAction<ICodeRowDTO[]>('/history')
            .then(dtos => dtos);
    }

    getAllVars(): Promise<Variable[]> {
        return this.getAction<IVariableDTO[]>('/workspace')
            .then(dtos => dtos.map(dto => new Variable(dto)));
    }
}

export { CodingActions, ICodingActions, IOutput };

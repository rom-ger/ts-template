interface IVariableDTO {
    name: string;
    type: string;
    value: string;
}

interface IVariable {
    name: string;
    type: string;
    value: string;
}

class Variable implements IVariable {
    name: string;
    type: string;
    value: string;

    constructor(dto: IVariableDTO) {
        this.name = dto.name;
        this.type = dto.type;
        this.value = dto.value;
    }
}

export { IVariableDTO, IVariable, Variable };

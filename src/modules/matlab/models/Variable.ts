interface IVariableDTO {
    name: string;
    size: number;
    value: string;
}

interface IVariable {
    name: string;
    size: number;
    value: string;
}

class Variable implements IVariable {
    name: string;
    size: number;
    value: string;

    constructor(dto: IVariableDTO) {
        this.name = dto.name;
        this.size = dto.size;
        this.value = dto.value;
    }
}

export { IVariableDTO, IVariable, Variable };

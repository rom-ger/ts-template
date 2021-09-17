interface ICodeRowDTO {
    In: string;
    Out: string;
}

interface ICodeRow {
    In: string;
    Out: string;
}

class CodeRow implements ICodeRow {
    In: string;
    Out: string;

    constructor(dto: ICodeRowDTO) {

        this.In = dto.In;
        this.Out = dto.Out;
    }
}

export { ICodeRowDTO, ICodeRow, CodeRow };

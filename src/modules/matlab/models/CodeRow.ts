interface ICodeRowDTO {
    in: string;
    out: string;
}

interface ICodeRow {
    in: string;
    out: string;
}

class CodeRow implements ICodeRow {
    in: string;
    out: string;

    constructor(dto: ICodeRowDTO) {

        this.in = dto.in;
        this.out = dto.out;
    }
}

export { ICodeRowDTO, ICodeRow, CodeRow };

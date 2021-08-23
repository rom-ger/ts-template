interface IDirectoryDTO {
    mtime: number;
    name: string;
    path: string;
    type: string;
    size: number;
}

interface IDirectory {
    mtime: number;
    name: string;
    path: string;
    type: string;
    size: number;
}

class Directory implements IDirectory {
    mtime: number;
    name: string;
    path: string;
    type: string;
    size: number;

    constructor(dto: IDirectoryDTO) {
        this.mtime = dto.mtime;
        this.name = dto.name;
        this.path = dto.path;
        this.type = dto.type;
        this.size = dto.size;
    }
}

export { IDirectoryDTO, IDirectory, Directory };

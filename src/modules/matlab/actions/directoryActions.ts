import { BaseActions } from '../../global/actions/baseActions';
import { IDirectoryDTO, Directory } from '../models/Directory';
// import directoryMock from '../mocks/directoryMock.json';

interface IDirectoryActions {
    getDirectories: (path: string | null) => Promise<Directory[]>;
}

class DirectoryActions extends BaseActions implements IDirectoryActions {
    constructor() {
        super('http://localhost:5000');
    }

    getDirectories(path: string | null): Promise<Directory[]> {
        // return this.getAction<IDirectoryDTO[]>(`dir${path ? `/${path}` : ''}`, directoryMock)
        return this.getAction<IDirectoryDTO[]>(`/dir${path ? `/${path}` : ''}`)
            .then(dtos => dtos.map(dto => new Directory(dto)));
    }
}

export { DirectoryActions, IDirectoryActions };

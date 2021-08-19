import { BaseActions } from '../../global/actions/baseActions'
import { IDirectoryDTO, Directory } from '../models/Directory';
import directoryMock from '../mocks/directoryMock.json';

interface IDirectoryActions {
    getDirectories: () => Promise<Directory[]>;
}

class DirectoryActions extends BaseActions implements IDirectoryActions {
    constructor() {
        super('https://localhost:5000/');
    }

    getDirectories(): Promise<Directory[]> {
        return this.getAction<IDirectoryDTO[]>('dir', directoryMock)
            .then(dtos => dtos.map(dto => new Directory(dto)));
    }
}

export { DirectoryActions, IDirectoryActions };

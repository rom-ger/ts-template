import { BaseActions } from '../../global/actions/baseActions';
import { IDirectoryDTO, Directory } from '../models/Directory';
import directoryMock from '../mocks/directoryMock.json';

interface IDirectoryActions {
    getDirectories: (path: string | null) => Promise<Directory[]>;
}

class DirectoryActions extends BaseActions implements IDirectoryActions {
    constructor() {
        super('http://178.154.225.112:5000/dir');
    }
    getDirectories(path: string | null): Promise<Directory[]> {
        window.console.log('path', path)
        return this.getAction<IDirectoryDTO[]>(`dir${path ? `/${path}` : ''}`, directoryMock)
            .then((dtos) => {
                return  dtos.map(dto => new Directory(dto))
            });
    }
}

export { DirectoryActions, IDirectoryActions };

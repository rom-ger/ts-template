import React, { useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import { IDirectoreStore } from '../../store/directoryStore';

interface IFileBrowse {
    directoryStore?: IDirectoreStore;
}

const FileBrowse = inject('directoryStore')(observer(({ directoryStore }: IFileBrowse) => {
    useEffect(
        () => {
            directoryStore?.getDirectories();
        },
        [],
    );

    if (!directoryStore) {
        return null;
    }
    return (
        <div>
            current folder {directoryStore.directories.length}
        </div>
    );
}));

export default FileBrowse;

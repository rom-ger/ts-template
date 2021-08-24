import React from 'react';
import { observer, inject } from 'mobx-react';
import { IDirectoreStore } from '../../store/directoryStore';

interface IFileBrowse {
    directoryStore?: IDirectoreStore;
}

const CurrentPath = inject('directoryStore')(observer(({ directoryStore }: IFileBrowse) => {
    if (!directoryStore) {
        return null;
    }
    return (
        <>
            <span>
                {`http://178.154.225.112:5000/dir/${directoryStore?.currentPath || ''}`}
            </span>
        </>
    );
}));

export default CurrentPath;

import React, { useEffect, useCallback } from 'react';
import { observer, inject } from 'mobx-react';
import { IDirectoreStore } from '../../store/directoryStore';
import { Directory } from '../../models/Directory';

interface IFileBrowse {
    directoryStore?: IDirectoreStore;
}

interface IDirectoryRowProps {
    directory: Directory;
    setCurrentPathCallback: (path: string | null) => void;
}

const DirectoryRow = ({ directory, setCurrentPathCallback }: IDirectoryRowProps) => {
    const onClick = useCallback(
        () => {
            setCurrentPathCallback(directory.path);
        },
        [setCurrentPathCallback, directory],
    );

    return (<div onClick={onClick}></div>);
}

const FileBrowse = inject('directoryStore')(observer(({ directoryStore }: IFileBrowse) => {
    useEffect(
        () => {
            directoryStore?.getDirectories(null);
        },
        [],
    );

    if (!directoryStore) {
        return null;
    }
    return (
        <div>
            {
                directoryStore.currentDirectory.map((directory, index) =>
                    <DirectoryRow
                        key={index}
                        setCurrentPathCallback={directoryStore.setCurrentPath}
                        directory={directory}
                    />,
                )
            }
        </div>
    );
}));

export default FileBrowse;

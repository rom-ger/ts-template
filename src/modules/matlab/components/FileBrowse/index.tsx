import React, { useEffect, useCallback } from 'react';
import { observer, inject } from 'mobx-react';
import { IDirectoreStore } from '../../store/directoryStore';
import { Directory } from '../../models/Directory';
import ReactSVG from 'react-svg';

interface IFileBrowse {
    directoryStore?: IDirectoreStore;
}

interface IDirectoryRowProps {
    directory: Directory;
    setCurrentPathCallback: (path: string | null) => void;
}

const DirectoryRow = ({ directory, setCurrentPathCallback }: IDirectoryRowProps) => {
    const goTo = useCallback(
        () => {
            setCurrentPathCallback((directory.path).replace('ipython', 'dir'));
        },
        [setCurrentPathCallback, directory],
    );

    return (
        <div
            className="directory-row"
            onClick={goTo}
        >
            <span className="directory-row__icon">
                <ReactSVG
                    src={'assets/images/folder_black_24dp.svg'}
                />
            </span>
            <span className="directory-row__title">{directory.name}</span>
        </div>
    );
};

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
        <>
            <div className="directory-row-header">
                <span>Name</span>
            </div>
            {
                directoryStore.currentDirectory.map((directory, index) =>
                    <DirectoryRow
                        key={index}
                        setCurrentPathCallback={directoryStore.setCurrentPath}
                        directory={directory}
                    />,
                )
            }
        </>
    );
}));

export default FileBrowse;

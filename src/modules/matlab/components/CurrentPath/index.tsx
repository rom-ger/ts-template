import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import { IDirectoreStore } from '../../store/directoryStore';

interface IFileBrowse {
    directoryStore?: IDirectoreStore;
}

const CurrentPath = inject('directoryStore')(observer(({ directoryStore }: IFileBrowse) => {
    const [splitDirs, setsplitDirs] = useState<string[] | null>([]);

    useEffect(
        () => {
            if (directoryStore?.currentPath) {
                setsplitDirs(directoryStore.currentPath.split('/'));
            }
        },
        [directoryStore?.currentPath],
    );

    const goToDir = (e: React.FormEvent<HTMLSpanElement>) => {
        let dirName = e.currentTarget.textContent;

        if (dirName && splitDirs) {
            let idx = splitDirs.indexOf(dirName.replace('/', ''));
            let path = `/${splitDirs
                .filter((d, index) => index <= idx && d.length)
                .join('/')}`;

            directoryStore?.setCurrentPath(path);
        }
    };

    if (!directoryStore) {
        return null;
    }

    return (
        <>
            <div style={{ display: 'flex' }}>
                {splitDirs && Boolean(splitDirs.length) ? (
                    <div>
                        <span>Current path: </span>
                        {splitDirs
                            .filter(d => d.length !== 0)
                            .map((d, index) =>
                                <span key={index} onClick={goToDir}>/{d}</span>,
                            )}
                    </div>
                ) : (
                    <span>Current path: /</span>
                )}
            </div>
        </>
    );
}));

export default CurrentPath;

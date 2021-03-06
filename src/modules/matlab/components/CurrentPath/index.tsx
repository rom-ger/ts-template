import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import { IDirectoreStore } from '../../store/directoryStore';

interface IFileBrowse {
    directoryStore?: IDirectoreStore;
}

const CurrentPath = inject('directoryStore')(observer(({ directoryStore }: IFileBrowse) => {
    const [splitDirs, setSplitDirs] = useState<string[] | null>([]);

    useEffect(
        () => {
            if (directoryStore?.currentPath) {
                setSplitDirs(directoryStore.currentPath
                                 .split('/')
                                 .filter(el => el.length !== 0));
            }
        },
        [directoryStore?.currentPath],
    );

    const goToDir = (index: number) => {
        let dirName = splitDirs?.length ? splitDirs[index] : '';

        if (dirName && splitDirs) {
            let idx = splitDirs.indexOf(dirName);
            let path = `/${splitDirs
                .filter((d, i) => i <= idx && d.length)
                .join('/')}`;

            directoryStore?.setCurrentPath(path);
        }
    };

    if (!directoryStore) {
        return null;
    }

    return (
        <>
            <div className="path-row">
                {splitDirs && Boolean(splitDirs.length) ? (
                    <>
                        <span>Current path:</span>
                        <div className="current-path">
                            {splitDirs
                                .filter(d => d.length !== 0)
                                .map((d, index) =>
                                         <div
                                             className="current-path__item"
                                             key={index}
                                             onClick={() => goToDir(index)}
                                         >
                                             /{d}
                                         </div>,
                                )}
                        </div>
                    </>
                ) : (
                    <span>Current path: /</span>
                )}
            </div>
        </>
    );
}));

export default CurrentPath;

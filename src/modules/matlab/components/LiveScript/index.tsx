import React from 'react';
import { observer, inject } from 'mobx-react';
import { ICodingStore } from '../../store/codingStore';
import CommandLine from '../CommandLine';

interface ICoding {
    codingStore?: ICodingStore;
}

const LiveScript = inject('codingStore')(observer(({ codingStore }: ICoding) => {

    return (
        <div className="live-script-container">
            <CommandLine />
        </div>
    );
}));

export default LiveScript;

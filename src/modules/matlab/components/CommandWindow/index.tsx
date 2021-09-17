import React, { useState } from 'react';
import { observer, inject } from 'mobx-react';
import { ICodingStore } from '../../store/codingStore';
import CommandHistory from '../CommandHistory';
import CommandLine from '../CommandLine';
import LiveScript from '../LiveScript';

interface ICoding {
    codingStore?: ICodingStore;
}

const CommandWindow = inject('codingStore')(observer(({ codingStore }: ICoding) => {
    const [amount, setAmount] = useState<number>(0);
    const test = () => {
        if (amount === 1) {
            setAmount(amount - 1);
        } else {
            setAmount(amount + 1);
        }
    };
    return (
        <>
            <button
                className="new-script-btn"
                onClick={test}
            >
                New Script
            </button>
            {amount === 1 && (
                <LiveScript />
            )}
            <CommandHistory />
            <CommandLine />
        </>
    );
}));

export default CommandWindow;

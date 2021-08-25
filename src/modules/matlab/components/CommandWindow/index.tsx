import React, { useState } from 'react';
import { observer, inject } from 'mobx-react';
import { ICodingStore } from '../../store/codingStore';

interface ICoding {
    codingStore?: ICodingStore;
}

const CommandWindow = inject('codingStore')(observer(({ codingStore }: ICoding) => {
    const [codeRow, setCodeRow] = useState<string | null>(null);

    const handleCode = (e: React.FormEvent<HTMLInputElement>) => {
        setCodeRow(e.currentTarget.value);
    };

    const passCodeOnKernel = () => {
        return window.console.log(codeRow);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="typecode"
                style={{ width: '100%' }}
                value={codeRow || ''}
                onChange={handleCode}
            />
            <button
                style={{ border: '1px solid #eee', background: '#eee', borderRadius: '5px', cursor: 'pointer' }}
                onClick={passCodeOnKernel}
            >
                execute
            </button>
        </div>
    );
}));

export default CommandWindow;

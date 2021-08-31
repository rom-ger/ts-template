import React, { useEffect, useState } from 'react';
import { observer, inject } from 'mobx-react';
import { ICodingStore } from '../../store/codingStore';

interface ICoding {
    codingStore?: ICodingStore;
}

const CommandWindow = inject('codingStore')(observer(({ codingStore }: ICoding) => {
    const [codeRow, setCodeRow] = useState<string | null>(null);

    useEffect(
        () => {
            codingStore?.getHistory()
        },
        [],
    );

    const handleCode = (e: React.FormEvent<HTMLInputElement>) => {
        setCodeRow(e.currentTarget.value);
    };

    const passCodeOnKernel = () => {
        codingStore?.executeCode(codeRow);
    };

    return (
        <>
            {/*{codingStore?.history && (*/}
            {/*    codingStore?.history.map(h => (*/}
            {/*        <div>{JSON.stringify(h)}</div>*/}
            {/*    ))*/}
            {/*)}*/}
            <div className="code-row">
                <input
                    className="code-row__code"
                    type="text"
                    placeholder="typecode"
                    value={codeRow || ''}
                    onChange={handleCode}
                />
                <button
                    className="code-row__exec-btn"
                    onClick={passCodeOnKernel}
                >
                    execute
                </button>
            </div>
        </>
    );
}));

export default CommandWindow;

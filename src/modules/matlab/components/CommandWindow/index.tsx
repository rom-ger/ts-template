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
            codingStore?.getHistory();
        },
        [],
    );

    const handleCode = (e: React.FormEvent<HTMLInputElement>) => {
        setCodeRow(e.currentTarget.value);
    };

    const passCodeOnKernel = () => {
        codingStore?.executeCode(codeRow);
        setCodeRow(null)
    };

    return (
        <>
            {codingStore?.history && (
                codingStore?.history.map((inout, index) => (
                    <div
                        className="inout-row"
                        key={index}
                    >
                        <div className="inout-row__in">
                            <span>[ {index + 1} ] : </span>
                            <span>{inout.In}</span>
                        </div>
                        {inout.Out && inout.Out !== 'None' && (
                            <div className="inout-row__out">
                                <span>[ {index + 1} ] : </span>
                                <span>{inout.Out}</span>
                            </div>
                        )}
                    </div>
                ))
            )}
            <div className="input-code-row">
                <input
                    className="input-code-row__code"
                    type="text"
                    placeholder="typecode"
                    value={codeRow || ''}
                    onChange={handleCode}
                />
                <button
                    className="input-code-row__exec-btn"
                    onClick={passCodeOnKernel}
                >
                    execute
                </button>
            </div>
        </>
    );
}));

export default CommandWindow;

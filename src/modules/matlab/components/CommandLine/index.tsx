import React, { useEffect, useState } from 'react';
import { observer, inject } from 'mobx-react';
import { ICodingStore } from '../../store/codingStore';

interface ICoding {
    codingStore?: ICodingStore;
}

const CommandLine = inject('codingStore')(observer(({ codingStore }: ICoding) => {
    const [codeRow, setCodeRow] = useState<string | null>(null);
    const [currentRowsAmount, setCurrentRowsAmount] = useState<number>(1);
    const [minRows] = useState<number>(1);
    const [maxRows] = useState<number>(20);

    useEffect(
        () => {
            codingStore?.getHistory();
        },
        [],
    );

    useEffect(
        () => {
            scrollToEndByClassName('.code-history-container');
        },
        [codingStore?.history],
    );

    const handleCode = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textareaLineHeight = 24;
        const previousRows = e.currentTarget.rows;
        e.currentTarget.rows = minRows;
        const currentRows = Math.floor((e.currentTarget.scrollHeight / textareaLineHeight));

        if (currentRows === previousRows) {
            e.currentTarget.rows = currentRows;
        }

        if (currentRows >= maxRows) {
            e.currentTarget.rows = maxRows;
            e.currentTarget.scrollTop = e.currentTarget.scrollHeight;
        }

        setCurrentRowsAmount(currentRows < maxRows ? currentRows : maxRows);
        setCodeRow(e.currentTarget.value);
    };

    const passCodeOnKernel = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && e.shiftKey) {
            codingStore?.executeCode(codeRow);
            setCodeRow(null);
            setCurrentRowsAmount(1);
            setTimeout(() => scrollToEndByClassName('.code-history-container'), 100);
        }
    };

    const scrollToEndByClassName = (className: string) => {
        const element = document.querySelector(className);

        if (element instanceof HTMLElement) {
            element.scrollTop = element.scrollHeight;
        }
    };

    return (
        <div className="input-code-row">
            <textarea
                className="input-code-row__code"
                rows={currentRowsAmount}
                placeholder="typecode"
                value={codeRow || ''}
                onKeyUp={passCodeOnKernel}
                onChange={handleCode}
            />
        </div>
    );
}));

export default CommandLine;

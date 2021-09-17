import React, { useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import { ICodingStore } from '../../store/codingStore';
import ReactSVG from 'react-svg';

interface ICoding {
    codingStore?: ICodingStore;
}

const VariablesInspector = inject('codingStore')(observer(({ codingStore }: ICoding) => {
    useEffect(
        () => {
            codingStore?.getVariables();
        },
        [],
    );

    return (
        <div className="workspace">
            <div className="workspace-header">
                <span className="workspace-header__item">Name</span>
                <span className="workspace-header__item">Value</span>
                <span className="workspace-header__item">Class</span>
            </div>
            {codingStore?.variables.map((v, index) => (
                <div
                    className="workspace-row"
                    key={index}
                >
                    <span className="workspace-row__item">
                        <div className="var-elem">
                            <ReactSVG
                                className="var-elem__icon"
                                src={'assets/images/view_in_ar_black_24dp.svg'}
                            />
                        <span
                            className="var-elem__title"
                        >
                            {v.name}
                        </span>
                        </div>
                    </span>
                    <span className="workspace-row__item">{v.value}</span>
                    <span className="workspace-row__item">{v.type}</span>
                </div>
            ))}
        </div>
    );
}));

export default VariablesInspector;

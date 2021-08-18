import React, { useState } from 'react';

const BUTTONS = ['HOME', 'PLOTS', 'APPS'];

const MatLab = () => {
    const [selectTabIndex, setSelectTabIndex] = useState<number>(0);

    return (
        <div>
            <div className="header-buttons">
                {
                    BUTTONS.map((name: string, index: number) =>
                        <div
                            className={`button-item ${selectTabIndex === index ? 'button-item--selected' : ''}`}
                            onClick={() => setSelectTabIndex(index)}
                            key={index}
                        >{name}</div>,
                    )
                }
            </div>
        </div>
    );
};

export default MatLab;

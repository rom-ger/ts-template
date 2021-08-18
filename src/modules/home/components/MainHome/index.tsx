import React, { useState } from 'react';

const BUTTONS = ['HOME', 'PLOTS', 'APPS'];

const MainHome = () => {
    const [selectTabIndex, setSelectTabIndex] = useState<number>(0);
    return (
        <div>
            <div className="header-buttons">
                {
                    BUTTONS.map((name: string, index: number) =>
                        <div
                            className={`button-item ${selectTabIndex === index ? 'button-item--selected' : ''}`}
                            onClick={() => setSelectTabIndex(index)}
                        >{name}</div>,
                    )
                }
            </div>
        </div>
    );
};

export default MainHome;

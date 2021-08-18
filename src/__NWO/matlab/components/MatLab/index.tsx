import React, { useState } from 'react';

const BUTTONS = ['HOME', 'PLOTS', 'APPS'];

const MatLab = () => {
    const [selectTabIndex, setSelectTabIndex] = useState<number>(0);

    return (
        <>
            <div className="tablist-wrapper">
                <div className="top-left-icon">
                    <a href="https://www.mathworks.com/products/matlab.html" target="_blank">
                        <div className="top-left-icon-temp"></div>
                    </a>
                </div>
                <div className="header-tablist">
                    {
                        BUTTONS.map((name: string, index: number) =>
                            <div
                                className={`header-tab ${selectTabIndex === index ? 'header-tab--selected' : ''}`}
                                onClick={() => setSelectTabIndex(index)}
                                key={index}
                            >
                                <span className="header-tab-title">{name}</span>
                            </div>,
                        )
                    }
                </div>
            </div>
            {selectTabIndex === 0 && (
                <div className="header-tab-wrapper">HOME buttons</div>
            )}
            {selectTabIndex === 1 && (
                <div className="header-tab-wrapper">PLOTS buttons</div>
            )}
            {selectTabIndex === 2 && (
                <div className="header-tab-wrapper">APPS buttons</div>
            )}
            <div className="main-section">
                <div className="folder-path">
                    /folder/path
                </div>
                <div className="code-area">
                    <div className="sidebar">
                        <div className="current-folder">current folder</div>
                        <div className="variable-inspector">variables</div>
                    </div>
                    <div className="notebook-area">
                        <div className="banner">New to MATLAB? See resources for <a href="https://www.mathworks.com/help/matlab/getting-started-with-matlab.html">Getting Started</a>
                        </div>
                        <div className="notebook"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MatLab;

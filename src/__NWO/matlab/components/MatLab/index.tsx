import React, { useState } from 'react';
// @ts-ignore
import classNames from 'classnames/bind';

const BUTTONS = ['HOME', 'PLOTS', 'APPS'];

const MatLab = () => {
    const [selectTabIndex, setSelectTabIndex] = useState<number>(0);

    return (
        <div className="application-container">
            <div className="header-toolstrip">
                <div className="toolstrip-nav">
                    <div className="toolstrip-nav__nav-icon">

                    </div>
                    {
                        BUTTONS.map((name: string, index: number) =>
                            <div
                                className={classNames(
                                    'toolstrip-nav__tab',
                                    {
                                        'toolstrip-nav__tab-selected': selectTabIndex === index,
                                    },
                                )}
                                onClick={() => setSelectTabIndex(index)}
                                key={index}
                            >
                                {name}
                            </div>,
                        )
                    }
                </div>
                <div className="tools">
                    {selectTabIndex === 0 && (
                        <div className="header-tab-wrapper">HOME tools</div>
                    )}
                    {selectTabIndex === 1 && (
                        <div className="header-tab-wrapper">PLOTS tools</div>
                    )}
                    {selectTabIndex === 2 && (
                        <div className="header-tab-wrapper">APPS tools</div>
                    )}
                </div>
            </div>
            <div className="workarea">
                <div className="workarea-path">
                    /path
                </div>
                <div className="workarea-main">
                    <div className="sidebar">
                        <div className="sidebar__file-system">current folder</div>
                        <div className="sidebar__variables-inspector">Workspace</div>
                    </div>
                    <div className="workarea-notebook">
                        <div className="workarea-notebook__banner">
                            New to MATLAB? See resources for&nbsp;
                            <a href="https://www.mathworks.com/help/matlab/getting-started-with-matlab.html"
                               target="_blank">Getting Started</a>
                        </div>
                    </div>
                </div>
                <div className="footer"></div>
            </div>
        </div>
    )
        ;
};

export default MatLab;

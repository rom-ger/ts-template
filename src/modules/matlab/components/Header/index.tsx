import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { ICodingStore } from '../../store/codingStore';
import { inject, observer } from 'mobx-react';

const BUTTONS = ['HOME', 'PLOTS', 'APPS'];

interface ICoding {
    codingStore?: ICodingStore;
}

const Header = inject('codingStore')(observer(({ codingStore }: ICoding) => {
    const [selectTabIndex, setSelectTabIndex] = useState<number>(0);

    return (
        <div className="header-root">
            <div className="header-root__nav">
                <div className="header-root__nav-icon">

                </div>
                {
                    BUTTONS.map((name: string, index: number) =>
                                    <div
                                        className={classNames(
                                            'header-root__tab',
                                            {
                                                'header-root__tab--selected': selectTabIndex === index,
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
            <div className="header-root__tools">
                {selectTabIndex === 0 && (
                    <div className="header-root__tab-wrapper">
                    </div>
                )}
                {selectTabIndex === 1 && (
                    <div className="header-root__tab-wrapper">PLOTS tools</div>
                )}
                {selectTabIndex === 2 && (
                    <div className="header-root__tab-wrapper">APPS tools</div>
                )}
            </div>
        </div>
    );
}));

export default Header;

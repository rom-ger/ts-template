import React from 'react';

import Header from '../header/Header';

interface MainWrapProps {
    children: any;
}

const MainWrap = ({ children }: MainWrapProps) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default MainWrap;

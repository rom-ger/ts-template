import React from 'react';
import Header from '../Header';
import CurrentPath from '../CurrentPath';
import FileBrowse from '../FileBrowse';
import VariablesInspector from '../VariablesInspector';
import CommandWindow from '../CommandWindow';
import Footer from '../Footer';

const MatLab = () => {
    return (
        <div className="main-container">
            <Header />
            <div className="workarea-path">
                <CurrentPath />
            </div>
            <div className="workarea-development">
                <div className="sidebar">
                    <div className="sidebar__file-browse">
                        <FileBrowse />
                    </div>
                    <div className="sidebar__variables-inspector">
                        <VariablesInspector />
                    </div>
                </div>
                <div className="workarea-command-window">
                    <CommandWindow />
                </div>
            </div>
            <div className="workarea-footer">
                <Footer />
            </div>
        </div>
    );
};

export default MatLab;

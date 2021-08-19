import React from 'react';
import Header from '../Header';
import Path from '../Path';
import FileBrowse from '../FileBrowse';
import VariablesInspector from '../VariablesInspector';
import CommandWindow from '../CommandWindow';
import Footer from '../Footer';

const MatLab = () => {
    return (
        <div className="main-container">
            <Header />
            <div className="main-workarea-container">
                <div className="workarea-path">
                    <Path />
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
        </div>
    );
};

export default MatLab;

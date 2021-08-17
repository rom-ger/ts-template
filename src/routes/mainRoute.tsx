import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import MainWrap from '../modules/global/components/MainWrap';
import MainHome from '../modules/home/components/MainHome';
import MainApps from '../modules/apps/components/MainApps';
import MainPlots from '../modules/plots/components/MainPlots';

const MainRouter = () => {
    return (
        <HashRouter>
            <Switch>
                <MainWrap>
                    <Switch>
                        <Route
                            path="/"
                            exact={true}
                            component={MainHome}
                        />
                        <Route
                            path="/home"
                            exact={true}
                            component={MainHome}
                        />
                        <Route
                            path="/apps"
                            exact={true}
                            component={MainApps}
                        />
                        <Route
                            path="/plots"
                            exact={true}
                            component={MainPlots}
                        />
                    </Switch>
                </MainWrap>
            </Switch>
        </HashRouter>
    );
};

export default  MainRouter;

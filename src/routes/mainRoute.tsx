import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import MatLab from '../__NWO/matlab/components/MatLab';
import Simulink from '../__NWO/simulink/components/Simulink';

const MainRouter = () => {
    return (
        <HashRouter>
            <Switch>
                    <Switch>
                        <Route
                            path="/"
                            exact={true}
                            component={MatLab}
                        />
                        <Route
                            path="/matlab"
                            exact={true}
                            component={MatLab}
                        />
                        <Route
                            path="/simulink"
                            exact={true}
                            component={Simulink}
                        />
                    </Switch>
            </Switch>
        </HashRouter>
    );
};

export default  MainRouter;
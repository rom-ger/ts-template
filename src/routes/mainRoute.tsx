import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import MatLab from '../modules/matlab/components/MatLab';
import Simulink from '../modules/simulink/components/Simulink';
import directoryStore from '../modules/matlab/store/directoryStore';
import codingStore from '../modules/matlab/store/codingStore';

const store = { directoryStore, codingStore };

const MainRouter = () => {
    return (
        <Provider
            {...store}
        >
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
        </Provider>
    );
};

export default MainRouter;

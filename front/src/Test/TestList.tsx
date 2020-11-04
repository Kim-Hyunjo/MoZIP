import Test from "./Test";
import * as React from 'react';
import { BrowserRouter as Router, Link, Route, RouteComponentProps, Switch } from 'react-router-dom';

const TestList = (props: RouteComponentProps<{}>) => {
    return (
        <div>
            {/* 1. exact={true} */}
            <Route exact={true} path={`${props.match.url}`} render={() => <h3>postList</h3>} />
            <Route path={`${props.match.url}/:postId`} component={Test} />
            {/* 2. <Switch> 다만 순서에 유의 */}
            <Switch>
                <Route path={`${props.match.url}/:postId`} component={Test} />
                <Route path={`${props.match.url}`} render={() => <h3>Switch postList</h3>} />
            </Switch>
        </div>
    );
};

export default TestList;
import React, { useContext } from "react";
import { Route, Switch, __RouterContext } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTransition, animated } from "react-spring";

import Login from "views/Login";
import Servers from "views/Servers";
import NotFound from "views/NotFound";
import Spinner from "components/Spinner";
import Container from "components/Container";

const Views = () => {
  const auth = useSelector(state => state.auth);
  const server = useSelector(state => state.server);
  const { location } = useContext(__RouterContext);

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <Container>
      {auth.loading || server.loading ? <Spinner /> : null}
      {transitions.map(({ item: location, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={location}>
            <Route exact path="/" component={Login} />
            <Route path="/servers" component={Servers} />
            <Route component={NotFound} />
          </Switch>
        </animated.div>
      ))}
    </Container>
  );
};

export default Views;

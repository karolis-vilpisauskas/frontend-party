import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getServers,
  filterByName,
  filterByDist
} from "store/actions/serverActions";
import { logout } from "store/actions/authActions";
import { useTrail, animated } from "react-spring";
import { ReactComponent as IconExit } from "assets/ico-logout.svg";

import Header from "components/Header";
import List from "components/List";
import ListFilter from "components/ListFilter";
import ListHeader from "components/ListHeader";
import ListItem from "components/ListItem";
import Logo from "components/Logo";
import Button from "components/Button";
import Success from "components/Success";
import Error from "components/Error";
import Absolute from "components/Absolute";

const Servers = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector(state => state.auth);
  const servers = useSelector(state => state.server.items);
  const [isNameAsc, setIsNameAsc] = useState(true);
  const [isDistAsc, setIsDistAsc] = useState(null);

  const config = { mass: 5, tension: 2000, friction: 200 };
  const trail = useTrail(servers.length, {
    config,
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: -50 }
  });

  useEffect(() => {
    if (auth.token) {
      dispatch(getServers());
    }
  }, [dispatch, auth.token]);

  useEffect(() => {
    if (!auth.isLoggedIn) {
      history.push("/");
    }
  }, [auth.isLoggedIn, history]);

  const handleLogout = useCallback(async () => {
    await dispatch(logout);
  }, [dispatch]);

  const handleNameFilter = useCallback(async () => {
    setIsDistAsc(null);
    setIsNameAsc(!isNameAsc);
    await dispatch(filterByName(isNameAsc));
  }, [dispatch, isNameAsc]);

  const handleDistFilter = useCallback(async () => {
    setIsNameAsc(null);
    setIsDistAsc(!isDistAsc);
    await dispatch(filterByDist(isDistAsc));
  }, [dispatch, isDistAsc]);

  return (
    <Absolute>
      <Error message={auth.error} />
      <Success message={auth.success} />
      <Header>
        <Logo isBlack={true} />
        <Button
          label="Logout"
          styleClass="logout"
          onClick={handleLogout}
          type="button"
        >
          <IconExit />
        </Button>
      </Header>
      <List>
        <ListHeader>
          <ListFilter
            handleFilter={handleNameFilter}
            value="name"
            isAsc={isNameAsc}
            label="SERVER"
          />
          <ListFilter
            handleFilter={handleDistFilter}
            value="distance"
            isAsc={isDistAsc}
            label="DISTANCE"
          />
        </ListHeader>
        {trail.map(({ x, ...rest }, index) => (
          <animated.li
            key={index}
            style={{
              ...rest,
              transform: x.interpolate(x => `translateX(${x}px)`)
            }}
          >
            <ListItem server={servers[index]} key={index} />
          </animated.li>
        ))}
      </List>
    </Absolute>
  );
};

export default Servers;

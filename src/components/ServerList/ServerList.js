import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getServers,
  filterByName,
  filterByDist
} from "../../store/actions/serverActions";
import { useTrail, animated } from "react-spring";
import "./ServerList.scss";

import ServerListHeader from "./ServerListHeader";
import ServerListItem from "./ServerListItem";

const ServerList = () => {
  const dispatch = useDispatch();
  const servers = useSelector(state => state.server.items);

  const config = { mass: 5, tension: 2000, friction: 200 };

  const trail = useTrail(servers.length, {
    config,
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: -50},
  })

  useEffect(() => {
    dispatch(getServers());
  }, [dispatch]);

  const dispatchFilterByName = isAsc => {
    dispatch(filterByName(isAsc));
  };

  const dispatchFilterByDist = isAsc => {
    dispatch(filterByDist(isAsc));
  };

  return (
    <div className="server-list-container">
      <ServerListHeader
        filterActionName={dispatchFilterByName}
        filterActionDist={dispatchFilterByDist}
      />
      <ul className="server-list">
        {trail.map(({ x, ...rest }, index) => (
          <animated.li
            key={index}
            style={{ ...rest, transform: x.interpolate(x => `translateX(${x}px)`) }}>
            <ServerListItem server={servers[index]} key={index} />
          </animated.li>
        ))}
      </ul>
    </div>
  );
};

export default ServerList;

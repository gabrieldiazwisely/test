import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Notifications from "react-notification-system-redux";
import PropTypes from "prop-types";

import { notificationActions } from "../redux/actions";

import { Container, Box } from "@material-ui/core";

import { Sidebar, Footer } from "../components";

const DASH_ROUTES = [
  {
    path: "/dashboard",
    name: "Dashboard",
    subMenu: []
  },
  {
    path: "/setting",
    name: "Setting",
    subMenu: [
      { id: 1, title: "Resumen", path: "/setting" },
      { id: 2, title: "Calculo de setting", path: "/setting/setting-calculation" },
      { id: 3, title: "Incremento poste", path: "/setting/incremento-poste" }
    ]
  },
  {
    path: "/wear",
    name: "Desgaste",
    subMenu: [
      { id: 1, title: "Resumen", path: "/wear" },
      { id: 2, title: "Perfil de desgaste", path: "/wear/perfil-desgaste" },
      { id: 3, title: "Mapa de espesores", path: "/wear/mapa-espesores" }
    ]
  },
  {
    path: "/sim-manto",
    name: "Sim. de manto",
    subMenu: []
  },
  {
    path: "/camera-geometry",
    name: "Geometría  de cámara",
    subMenu: [
      { id: 1, title: "Resumen", path: "/camera-geometry" },
      { id: 2, title: "Deformaciones", path: "/camera-geometry/deformaciones" },
      { id: 3, title: "Ángulo cámara", path: "/camera-geometry/angulo-camara" }
    ]
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    const { user, history, dispatch } = this.props;

    const pathname = history.location.pathname;
    console.debug("[CApp] fn=constructor, window.location.pathname=", pathname);
    if (user.isAuthed) {
      if (pathname === "/signin" || pathname === "/register") {
        if (pathname !== "/") history.replace("/");
      } //else {
      //history.replace('/dashboard')
      //}
    } else {
      if (pathname !== "/signin") history.replace("/signin");
    }

    history.listen(() => {
      // clear notifications on location change
      dispatch(notificationActions.clear());
    });
  }
  shouldComponentUpdate(nextProps) {
    const locationChanged = nextProps.location !== this.props.location;
    console.debug(
      `[CApp] fn=shouldComponentUpdate, locationChanged=${locationChanged}, nextProps.location=${nextProps.location.pathname}, this.props.location=${this.props.location.pathname}`
    );
    return (
      locationChanged ||
      nextProps.notifications.length !== this.props.notifications.length
    );
  }
  render() {
    console.debug("[CApp] fn=render");
    const { notifications, user } = this.props;
    return (
      <div className={!user.isAuthed && "background-img"}>  
        {user.isAuthed && <Sidebar DASH_ROUTES = {DASH_ROUTES} {...this.props} /> }
        <Notifications
          notifications={notifications}
          className="notifications-lb"
        />
        <Container maxWidth="xl">
          <Box mt={18} >{this.props.children}</Box>
        </Container>
        {user.isAuthed && <Footer {...this.props} />}
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  notifications: PropTypes.array.isRequired,
  children: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { notifications, user } = state;
  return { notifications, user };
}

const connected = withRouter(connect(mapStateToProps)(App));
export { connected as App };

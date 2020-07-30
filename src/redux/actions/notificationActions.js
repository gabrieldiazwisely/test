import Notifications from "react-notification-system-redux";

export const notificationActions = {
  success,
  error,
  warning,
  info,
  hide,
  clear
};

const notification = {
  title: "",
  message: "",
  position: "tr",
  autoDismiss: ""
};

function success({ uid, message }) {
  notification.uid = uid || _getRandomId();
  notification.title = "Success";
  notification.message = message;
  return dispatch => {
    dispatch(Notifications.success(notification));
  };
}

function error({ uid, message }) {
  notification.uid = uid || _getRandomId();
  notification.title = "Error";
  notification.message = message;
  return dispatch => {
    dispatch(Notifications.error(notification));
  };
}

function warning({ uid, message }) {
  notification.uid = uid || _getRandomId();
  notification.title = "Warning";
  notification.message = message;
  return dispatch => {
    dispatch(Notifications.warning(notification));
  };
}

function info({ uid, message }) {
  notification.uid = uid || _getRandomId();
  notification.title = "Info";
  notification.message = message;
  return dispatch => {
    dispatch(Notifications.info(notification));
  };
}

function hide(uid) {
  return dispatch => {
    dispatch(Notifications.hide(uid));
  };
}

function clear() {
  return dispatch => {
    dispatch(Notifications.removeAll());
  };
}

function _getRandomId() {
  return Math.random()
    .toString(36)
    .substring(2);
}

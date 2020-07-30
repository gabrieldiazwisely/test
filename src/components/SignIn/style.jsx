import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  textInput: {
    width: "100%",
    height: "48px",
    backgroundColor: "#FFFFFF",
    margin: theme.spacing(1, 4, 1, 4)
  },
  submitButton: {
    margin: theme.spacing(2, "auto"),
    background: "#ffffff 0% 0% no-repeat padding-box",
    boxShadow: "0px 5px 5px #0000001F",
    borderRadius: "30px",
    height: "48px",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: 500,
    letterSpacing: "0.16px",
    color: "#1363BD",
    opacity: 1
  },
  userOptions: {
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "8px"
  },
  checkBox: { color: "#2BB38B" },
  forgotPassword: {
    color: "#2BB38B",
    fontFamily: "Roboto",
    fontWeight: 400
  },

  alignCenter: { alignSelf: "center" },
  laptopTitle: {
    fontSize: "2.8rem",
    color: "#FFFFFF",
    width: "50%",
    margin: "0 auto",
    fontFamily: "Roboto",
    fontWeight: "600",
    textAlign: "center"
  },
  laptopText: {
    fontSize: "1.5rem",
    color: "#FFFFFF",
    width: "80%",
    margin: "10px auto",
    fontFamily: "Roboto",
    textAlign: "center"
  },
  direction: {
    display: "flex",
    flexDirection: "column"
  },
  laptopWidth: {
    width: "75%",
    margin: "0 auto"
  },
  formContainer: {
    background: "#1363BD",
    textAlign: "center"
  },
  form: {
    display: "flex",
    width: "100%",
    textAlign: "center",
    flexDirection: "column"
  },
  forgotPass: {
    color: "#fff",
    marginRight: theme.spacing(4),
    "&:hover": {
      textDecoration: "none",
      color: "#adadad"
    }
  },
  title: {
    color: "#fff",
    paddingTop: theme.spacing(3),
    fontSize: 35,
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  iconAccount: {
    color: "#fff",
    fontSize: 85
  }
}));

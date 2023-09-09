import Login from "./components/Login/Login";
import Heading from './components/Heading/Heading'
const login = new Login();
const heading = new Heading(1);
heading.text = "This is a login form";
heading.render(" >===== Login page'");
login.render();
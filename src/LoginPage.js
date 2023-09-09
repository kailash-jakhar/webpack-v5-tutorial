import Login from "./components/Login/Login";
import Heading from './components/Heading/Heading'
import React from 'react'
const login = new Login();
const heading = new Heading(1);
heading.text = "This is a login form";
heading.render(" >===== Login page'");
login.render();
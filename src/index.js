import Button from './components/Button/Button'
import Heading from './components/Heading/Heading'
import _ from 'lodash'
import Link from './components/Link/Link';


const button = new Button('Click Me');
button.label = "Click here"
button.onClick = () => {
    console.log("button clicked")
}
button.render();

const heading = new Heading(1);
heading.text = "This is a heading";
heading.render(_.upperCase('main page'));

heading.text = process.env.NODE_ENV;
heading.render(_.upperCase('main page')); 

const link = new Link();
link.render('/login',"Go to login page");

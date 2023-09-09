import UserIcon from './user.png';
import './Login.scss';
class Login {
    render () {
        const loginElement = document.createElement('div');
        const heading = document.createElement('h3');
        heading.innerHTML ="Login"
        loginElement.appendChild(heading)
        const image = document.createElement('img');
        image.src = UserIcon;
        image.alt = "User"
        loginElement.appendChild(image);
        loginElement.classList.add('login');
        document.getElementById('root').appendChild(loginElement);
    }

}

export default Login
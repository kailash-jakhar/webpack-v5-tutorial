import Bird from './image.png'
import alt from './alt.txt'
export function callMe() {
    console.log("wwww called")
}

export function clickMe() {
    console.log("click me")
}

export function addImage () {
    const image = document.createElement('img');
    image.height = 200;
    image.alt = alt;
    image.width = 200;
    image.src = Bird;
    document.getElementById("root").appendChild(image)

}


import Colors from '../Collections/colors';

function changeFrameColor() {

  const frame = document.querySelector("#frame");
  
  frame.style.backgroundColor = Colors[Math.floor(Math.random() * Colors.length)];
}

export default changeFrameColor;
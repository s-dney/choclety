var button;
var img;

function setup() {
  button = createButton('give thank');
  button.position(19, 19);
  button.mousePressed(words);
  img = createImg('milk.jpg');
  img.position(150, 10);
}

function words() {
  createP("thanks spoder");
}

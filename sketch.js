// const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
const density = '       .:-i|=+%O#@';

let video;
let ascii_div;

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(200, 80);
  ascii_div = createDiv();
  video.hide();
}

function draw() {
  video.loadPixels();
  let ascii_frame = "";
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixel_index = (i + j * video.width) * 4
      const r = video.pixels[pixel_index + 0];
      const g = video.pixels[pixel_index + 1];
      const b = video.pixels[pixel_index + 2];
      const avg = (r + g + b) / 3

      const len = density.length;
      const char_index = floor(map(avg, 0, 255, 0, len));
 
      const c = density.charAt(char_index);
      if (c == ' ') ascii_frame += "\u00A0";
      else ascii_frame += c;
    }
    ascii_frame += '<br/>'
  }
  ascii_div.html(ascii_frame);
}

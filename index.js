let body = document.getElementsByTagName('body')[0];
let app = document.getElementById('app');
let h1 = document.createElement('h1');
let p = document.createElement('p');

let red = roof = 255;
let green = blue = floor = 210;
let counter1 = counter2 = counter3 = degCounter = 0;

h1.innerHTML = 'PULSAR CLOCK';
app.appendChild(h1);
app.appendChild(p);

getColor = () => {
  if (red == roof && green < roof && blue == floor) { counter1++; green++ }
  else if (red > floor && green == roof && blue == floor) { counter2++; red-- } 
  else if (red == floor && green == roof && blue < roof) { counter3++; blue++ } 
  else if (red == floor && green > floor && blue == roof && counter1 > 0) { counter1--; green-- }
  else if (red < roof && green == floor && blue == roof && counter2 > 0) { counter2--; red++ }
  else if (red == roof && green == floor && blue > floor && counter3 > 0) { counter3--; blue-- }
  rgb = [red, green, blue];
  return rgb;
}

setInterval(() => {
  let clock = new Date();
  let h = clock.getHours() < 10 ? `0${clock.getHours()}` : clock.getHours();
  let m = clock.getMinutes() < 10 ? `0${clock.getMinutes()}` : clock.getMinutes();
  let s = clock.getSeconds() < 10 ? `0${clock.getSeconds()}` : clock.getSeconds();
  let time = `${h}:${m}:${s}`;
  p.innerHTML = time;

  if (degCounter == 360) degCounter = 0;

  let r = getColor()[0]; // red spectrum   (floor < r < roof)
  let g = getColor()[1]; // green spectrum (floor < g < roof)
  let b = getColor()[2]; // blue spectrum  (floor < b < roof)

  colors = {
    //all possible combinations of three spectra
    c01 : `rgb(${r}, ${r}, ${r})`,
    c02 : `rgb(${r}, ${r}, ${g})`,
    c03 : `rgb(${r}, ${r}, ${b})`,
    c04 : `rgb(${r}, ${g}, ${r})`,
    c05 : `rgb(${r}, ${g}, ${g})`,
    c06 : `rgb(${r}, ${g}, ${b})`,
    c07 : `rgb(${r}, ${b}, ${r})`,
    c08 : `rgb(${r}, ${b}, ${g})`,
    c09 : `rgb(${r}, ${b}, ${b})`,
    c10 : `rgb(${g}, ${r}, ${r})`,
    c11 : `rgb(${g}, ${r}, ${g})`,
    c12 : `rgb(${g}, ${r}, ${b})`,
    c13 : `rgb(${g}, ${g}, ${r})`,
    c14 : `rgb(${g}, ${g}, ${g})`,
    c15 : `rgb(${g}, ${g}, ${b})`,
    c16 : `rgb(${g}, ${b}, ${r})`,
    c17 : `rgb(${g}, ${b}, ${g})`,
    c18 : `rgb(${g}, ${b}, ${b})`,
    c19 : `rgb(${b}, ${r}, ${r})`,
    c20 : `rgb(${b}, ${r}, ${g})`,
    c21 : `rgb(${b}, ${r}, ${b})`,
    c22 : `rgb(${b}, ${g}, ${r})`,
    c23 : `rgb(${b}, ${g}, ${g})`,
    c24 : `rgb(${b}, ${g}, ${b})`,
    c25 : `rgb(${b}, ${b}, ${r})`,
    c26 : `rgb(${b}, ${b}, ${g})`,
    c27 : `rgb(${b}, ${b}, ${b})`
  };

  // You can choose a color for the gradient (it is better to take no more than three)
  // You can use linear-gradient(${degCounter}deg, ... if you need, or radial-gradient( ...
  body.style.backgroundImage = `linear-gradient(${degCounter}deg, ${colors.c02}, ${colors.c21}, ${colors.c06})`;
  degCounter+=5;

}, 30);


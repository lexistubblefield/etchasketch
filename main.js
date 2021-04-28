// your javascript file 
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('happy');
content.textContent = 'This is the start';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.classList.add('red');
paragraph.textContent = 'This is red text';

container.appendChild(paragraph);
const heading = document.createElement('h3');
heading.classList.add('blue');
heading.textContent = 'Im a blue h3';

container.appendChild(heading);

const div = document.createElement('div h1 p');
div.classList.add('text');
h1.textContent = `Im In A Div`;
p.textContent = `ME TOO`;

container.appendChild(div);
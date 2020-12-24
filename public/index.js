
const container = document.createElement('div');
const body = document.querySelector('body');
container.className = 'container';
body.appendChild(container);

const paragrap = document.createElement('p');
paragrap.className = 'paragrap';
paragrap.innerText = 'Menu'
container.appendChild(paragrap);

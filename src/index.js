function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello webpack1';
  return element;
}

document.body.appendChild(component());

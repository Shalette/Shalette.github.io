window.addEventListener('scroll', () => {
  let parent =  document.getElementById('parallax');
  let children = parent.getElementsByTagName('img');
  for(let i = 0; i < children.length; i++) {
    children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
  }
}, false

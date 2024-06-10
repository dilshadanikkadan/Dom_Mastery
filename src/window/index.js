// ...the page content is above...

function isVisible(elem) {

    let coords = elem.getBoundingClientRect();
  
    let windowHeight = document.documentElement.clientHeight;
  
    // top elem edge is visible?
    let topVisible = coords.top > 0 && coords.top < windowHeight;
  
    // bottom elem edge is visible?
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  
    return topVisible || bottomVisible;
  }
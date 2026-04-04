function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


const handleSearch = debounce((query) => {
  console.log("Searching for:", query);
}, 500);

document.querySelector('input').addEventListener('input', (e) => {
  handleSearch(e.target.value);
});



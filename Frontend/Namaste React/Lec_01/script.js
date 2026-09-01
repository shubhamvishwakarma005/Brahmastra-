// const root = document.getElementById('root')
// console.log(root);


// const child = document.createElement('h1')
// child.innerHTML = 'Namaste React'

// root.appendChild(child)


// what is CDN ?
// what is crossOrigin ?


const root = ReactDOM.createRoot(document.getElementById('root'))

 const heading = React.createElement('h1', {}, "Namaste React!")
 root.render(heading)
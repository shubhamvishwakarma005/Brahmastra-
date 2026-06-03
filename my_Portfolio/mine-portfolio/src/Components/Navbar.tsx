
function Navbar() {

     const navLinks = [
  { id: 1, label: "Home", href: "#" },
  { id: 2, label: "Skills", href: "#skills" },
  { id: 3, label: "Projects", href: "#projects" },
  { id: 4, label: "Blogs", href: "#blogs" },
];


  return (
   <nav className="text-lg flex justify-between items-center py-4">

    <h1 className="">Shubham Vishwakarma</h1>
        <div className="text-sm">
           <ul className="flex gap-3">
            {navLinks.map((link) => (
                <li key={link.id}>
                    <a href={link.href}>{link.label}</a>
                </li>
            ))}
           </ul>
        </div>

   </nav>
  )
}

export default Navbar
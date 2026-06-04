
function Profileinfo() {

  const social = [
      { id: 1, label: "GitHub", href: "https://github.com/shubhamvishwakarma005" },
      { id: 2, label: "LinkedIn", href: "https://www.linkedin.com/in/shubham-kumar-vishwakarma-46ab9b24a/" },
      { id: 3, label: "Twitter", href: "https://x.com/shubhvish005"},
    ];

  return (

    <div>
      <div className='w-26 h-26 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border border-white-600'>
        <img src="myPhot.jpeg" 
             alt="profile-picture" 
             className='w-full rounded-full
             object-cover'
        />
      </div>
     
      <div>
        <h1 className="mt-4 font-bold text-2xl ">Shubham Vishwakarma</h1>
        <p className="geist mt-2">
            Frontend Developer focused on crafting modern, responsive, and accessible web experiences. I specialize in building scalable interfaces with React, TypeScript, and Tailwind CSS, combining clean code with thoughtful design to create products users enjoy using.
        </p>
      </div>

      <div>
        <ul>
          {social.map((socl)=>{
            return(
              <li key={socl.id}>
                <a href={socl.href} >
                  <img src="" alt="" />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
    
  )
}

export default Profileinfo
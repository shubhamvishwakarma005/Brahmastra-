// const sendEmail = (type, user) => console.log(`Sending ${type} email to ${user}`)
// sendEmail("ana@gamil.com", 'anany')


// Curring 

const sendEmail = type => user =>
  console.log(`Sending ${type} email to ${user}`)

const welcomeEmail = sendEmail("Welcome")


welcomeEmail("shubham")

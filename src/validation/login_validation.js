export const loginErrors = function (fields) {
    let errors;
    if (!fields.password || !fields.email) {
        errors = 'Invalid fields'
      } else if (!fields.password){ 
        errors = 'Invalid password!'
      }else if (!fields.email || !fields.email.endsWith('.com') || !fields.email.includes('@') || fields.email.includes(' ')) {
        errors = 'Invalid email'
      }
      return errors
}

export const signupErrors = function (fields) {
    let errors;
    if (!fields.firstname || !fields.username || !fields.lastname || !fields.password || !fields.email || !fields.verify) {
        errors = 'Invalid fields'
      } else if (fields.password !== fields.verify){ 
        errors = 'Password don\'t match'
      } else if (!fields.password || fields.password.length < 7 || fields.password.includes('password')) {
        errors = 'Invalid password! password must be > 7 and must not contain the word password'
      }else if (!fields.email.endsWith('.com') || !fields.email.includes('@') || fields.email.includes(' ')) {
        errors = 'Invalid email'
      }
      return errors
}

export default function taskValidation (data) {
    let error = ''
    const health  = "headache fever chills vomiting fatigue stomachpain diarrhea cough"
    const lowdata = data.toLowerCase()
     
        if (!health.toLowerCase().includes(lowdata)) {
          error = 'explanation is not clear to us, we trying to give you the best, our site is Api davelops with time'
         return error
        }
        return error
}

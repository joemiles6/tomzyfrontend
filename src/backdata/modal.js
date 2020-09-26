export default class Api {
 constructor (StringData, data) {
    this.StringData = StringData
     this.data = data
 }
    webApi () {
    this.workOnApi()
    }
    JsonParse () {
    return JSON.parse(this.StringData)
    }
    workOnApi () {
     this.JsonParse().forEach(el => {
      this.symptomApi(el)
     })
   }
    symptomApi (symptom) {
    symptom.symptoms.forEach ((illness, index) => {
       this.getUserdata(illness, symptom)
    })
 }
 getUserdata (data, symptoms) {
    const splitData = this.data.split(' ') || this.data
    splitData.forEach(el => {
        if (data.type.includes(el)) { 
            // illness type : ex maleria. and more, symoptom[img, more, [sign], type]
            // check medications
            this.buildApi({data, more: symptoms.more, type: symptoms.type}, symptoms.medication)
        }
    })
}


 buildApi (symptoms, medication) {
    const e = this.medicationLoop(medication, symptoms.data.type)
      // get a ui response
      // console.log(medication)
  const Markup =`
  <div class="head_m" style="background:linear-gradient(rgba(1, 5, 61, .5), rgba(1, 5, 61, .5)), url(${symptoms.data.img}); background-repeat: no-repeat; background-size: 100%; background-position: center">
  <div class="top_m">${symptoms.type}</div>
  <div class="illness_m">${symptoms.data.type}</div>
</div>
<div class="disease">
<h3 class="big">${symptoms.type}.</h3>
  <div class="fact">
    <h3>Do you know that?</h3>
    <div class="factBonus">
    ${symptoms.more}
    </div>
  </div>
  <h3>what we diagnosed from your explanation!</h3>
  <div class="data">
    <p>you have ${symptoms.data.type} and most of the signs you recieve are </p>
    <ul>
    <li>${symptoms.data.cause[0]}<li>
    </ul>

    <div class="fact">
    <h3>Do you know that?</h3>
    <div class="factBonus">
     ${symptoms.data.more}
    </div>
  </div> 
  </div>
  <h3>Our enforth is to make sure you get medications that will help you.</h3>
  <p>Visit any pharmarceutical store and get this drugs with the doctor prescriptions.</p>
  <div class="drugs">
  <h3> for ${e.type} </h3>
  <ul>

    <div class="drug">
      <li>${e.drugs[0].name}</li>
    <h2>do you know that!</h2>
    <p>${e.drugs[0].about}</p>
    <h5>who shouldn't take this drug?  : ${e.drugs[0].ageLimit}</h5>  
    </div>
    <div class="drug">
      <li>${e.drugs[1].name}</li>
     <h2>do you know that!</h2>
    <p>${e.drugs[1].about}</p>
    <h5>who shouldn't take this drug? : ${e.drugs[1].ageLimit}</h5>
    <h4>Prescription: ${e.drugs[1].prescription}</h4>
    </div>

  </ul>
</div>
</div>
  `
  const main = document.querySelector('.body')
  if (main.textContent) {
    if (main.textContent !== '') {}
      main.textContent = ''
  }
  main.insertAdjacentHTML('beforeend', Markup)
 }
 medicationLoop (data, illness) {
     const medication = {
         type: '',
         drugs: []
     }
     data.forEach ((el, i) => {
        if (el.type === illness) {
         medication.type = el.type
         medication.drugs = el.drugs
        }
     })
    return medication
 }
 
}

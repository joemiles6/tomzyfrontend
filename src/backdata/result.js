import moment from "moment"
export default class results {
    constructor (data) {
        this.data = data
    }
    task () {
       if (this.data) {
        this.loop(this.data)
       }
    //   document.querySelector('.field').insertAdjacentHTML('beforebegin', data)
    }
    loop (data) {
    this.data.forEach(el => {
       this.markUp(el)
    })
    }
    markUp (data) {
    //    const loop =  this.loop(data)
        const HtmlMarkup = `
        <div class="list">
        <div class="test id">#Test_${data.fakeId}</div>
        <div class="test exp">${data.explanation}</div>
        <div class="test exp">${moment(data.createdAt).fromNow()}</div>
        <div class="test btn" @click="result">open<i class="cavet"></i></div>
    </div>
        `
    console.log( document.querySelector('.field').insertAdjacentHTML('beforebegin', HtmlMarkup)
    )
    }
   }
   
// let currentPage = 1
const PerPage = 5
export default class pagnination {
    constructor (task, currentPage) {
        this.task = task
        this.currentPage = currentPage
    }
    paginate () {
        if (this.task.data.getTask.length) {
            return  this.taskPerPage(this.task.data.getTask)            
        }
    }
    taskPerPage (data) {
        const start = this.currentPage * PerPage
        const end = PerPage * (this.page())
       return data.slice(start, end)
    }
    page () {
      return this.currentPage + 1
    }
    pages () {
    return Math.ceil(this.task.data.getTask.length / PerPage) 
    //  6 / 5 ==> 1.2 = 2
    }
    // eachpages () {
    //     const mathslice
    // }
} 

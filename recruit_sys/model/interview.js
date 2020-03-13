import {
    HTTP
} from '../utils/http.js'

class InterviewModel extends HTTP {
    getTime(sCallback) {
        this.request({
            url: '/interview',
            success: (res) => {
                sCallback(res)
            }
        })
    }
    // getStatus(sCallback) {
    //     this.request({
    //         url: '/judge',
    //         success: (res) => {
    //             sCallback(res)
    //         }
    //     })
    // }
    postResult(data, sCallback) {
        this.request({
            url: '/refer',
            method: 'POST',
            data,
            success: (res) => {
                sCallback(res)
            }
        })
    }
    getpreviousTime(sCallback) {
        this.request({
            url: '/amend',
            success: (res) => {
                sCallback(res)
            }
        })
    }
    postResultagain(data, sCallback) {
        this.request({
            url: '/submit',
            method: 'POST',
            data,
            success: (res) => {
                sCallback(res)
            }
        })
    }
    getcheck(sCallback) {
        this.request({
            url: '/interview_info',
            success: (res) => {
                sCallback(res)
            }
        })
    }
    getnumber(sCallback) {
        this.request({
            url: '/interview_number',
            success: (res) => {
                sCallback(res)
            }
        })
    }
    getrusult(sCallback){
        this.request({
            url: '/Find_result',
            success: (res) => {
                sCallback(res)
            }
        })
    }
    getlastResult(data,sCallback){
        this.request({
            url: '/Decide_result',
            method: 'POST',
            data,
            success: (res) => {
                sCallback(res)
            }
        })
    }
    getlastest(sCallback){
        this.request({
            url: '/result_publish',
            success: (res) => {
                sCallback(res)
            }
        })
    }
    getquestion(sCallback){
        this.request({
            url: '/question',
            success: (res) => {
                sCallback(res)
            }
        })
    }
    getqq(sCallback){
        this.request({
            url: '/qqNumber',
            success: (res) => {
                sCallback(res)
            }
        })
    }
    
}

export {
    InterviewModel
}

















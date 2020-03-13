import {
    HTTP
} from '../utils/http.js'

class MineModel extends HTTP {
    getApplystat(sCallback){
        this.request({
            url: '/if_apply',
            success: (res) => {
                sCallback(res)
            }
        })
    }
    getInterviewSign(sCallback){
        this.request({
            url: '/if_interviewSign',
            success: (res) => {
                sCallback(res)
            }
        })
    }
}

export {
    MineModel
}

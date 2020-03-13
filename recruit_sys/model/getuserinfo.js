import {
    HTTP
} from '../utils/http.js'

class getuserinfoModel extends HTTP {
    getinfo(sCallback) {
        this.request({
            url: '/User_info',
            success: (res) => {
                sCallback(res)
            }
        })
    }

}

export {
    getuserinfoModel
}

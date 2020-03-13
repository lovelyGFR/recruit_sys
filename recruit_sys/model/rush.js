import { HTTP } from '../utils/http.js'

class  RushModel extends HTTP {
    getTime(sCallback){
        this.request({
            url : '/brief_info',
            success: (res) =>{
                sCallback(res)
            }
        })
    }
    gettics(data,sCallback){
        this.request({
            url : '/brief_s',
            data,
            success: (res) =>{
                sCallback(res)
            }
        })
    }
    getcount(data,sCallback){
        this.request({
            url : '/ticket_count',
            data,
            success: (res) =>{
                sCallback(res)
            }
        })
    }
    postInfo(data,sCallback){
        this.request({
            url : '/ticket_snatch',
            method : 'POST',
            data,
            success:(res)=>{
                sCallback(res)
            }
        })
    }
    getQRcode(sCallback){
        this.request({
            url : '/ticket_qr',
            success:(res)=>{
                sCallback(res)
            }
        })
    }
    
    getInfo(sCallback){
        this.request({
            url : '/ticket_info',
            success:(res)=>{
                sCallback(res)
            }
        })
    }
    getTicketstat(sCallback){
        this.request({
            url: '/if_lecSign',
            success: (res) => {
                sCallback(res)
            }
        })
    }
    
}

export { RushModel }
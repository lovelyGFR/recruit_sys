import { HTTP } from '../utils/http.js'

class  SignupModel extends HTTP {
         
    postInfo(data,sCallback){
        this.request({
            url : '/info_A',
            method : 'POST',
            data,
            success:(res)=>{
                sCallback(res)
            }
        })
    } 
    getTimeone(sCallback){
        this.request({
            url : '/cutoff_time',
            success: (res) =>{
                sCallback(res)
            }
        })
    }
       
}

export { SignupModel }
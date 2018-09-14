import {SAVE_USERID} from '../action/saveUserId';
let initUserInfo = {userId:'',userName:'',type:SAVE_USERID}
const saveUserIdReducer = (state=initUserInfo,action)=>{
    const newState = state;
    const userId = action.userId;
    const userName = action.userName;
    switch(action.type){
        case SAVE_USERID:
            return{
                ...newState,
                userId,
                userName,
                type:SAVE_USERID
            }
        default:
            return initUserInfo
    }
}
export default saveUserIdReducer;
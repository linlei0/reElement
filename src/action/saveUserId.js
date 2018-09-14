export const SAVE_USERID = 'SAVE_USERID';
export const saveUserId = (userId,userName)=>{
    return {
        userId,
        userName,
        type:SAVE_USERID
    }
}
import * as TYPES from '../action-types'

let INIT_STATE = {
    baseInfo:null
}
export default function person (state = INIT_STATE,action){
    state = JSON.parse(JSON.stringify(state));
    // let payload = {};
    switch(action.type){
        case TYPES.PERSON_QUERY_BASE:
            // payload = action.payload
            // 获取成功
            // parseFloat(payload.code) ===0 ? state.baseInfo = payload.data:null
            break;
        default:
            break;
    }
    return state
}
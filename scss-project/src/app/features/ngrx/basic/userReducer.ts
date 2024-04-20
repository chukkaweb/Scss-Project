let initialState = {
    name : '',
    email:'',
    mobile:null
}
export function userReducer(state = initialState, action:any) {
        switch (action.type) {
        case 'name-edit' : return { ...state, name: action.payload } ;
        case 'email-edit': return { ...state , email:action.payload } ;
        case 'mobile-edit': return { ...state , mobile:action.payload}
        default: return state;
    }

}
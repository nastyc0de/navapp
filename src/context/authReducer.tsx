import { AuthState } from "../Intefaces";

type AuthAction = {type: 'SignIn'}
const authReducer = (state: AuthState, action: AuthAction):AuthState => {
    switch (action.type) {
        case 'SignIn':
            return{
                ...state,
                isLoggedIn:true,
                userName:'No_username'
            }
            
    
        default:
            return state;
    }
    
}
export default authReducer;
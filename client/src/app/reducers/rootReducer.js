import { combineReducers } from 'redux';
import { reducer as FormReducer} from "redux-form";
import auth from '../../features/auth/authReducer';
import idea from '../../features/idea/ideaReducer';
import profile from '../../features/user/profileReducer';
import { reducer as ToastrReducer } from 'react-redux-toastr';

const rootReducer = combineReducers({
  auth,
  idea,
  profile,
  form: FormReducer,
  toastr: ToastrReducer
});

export default rootReducer;
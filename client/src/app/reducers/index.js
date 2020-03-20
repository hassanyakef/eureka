import { combineReducers } from 'redux';
import { reducer as FormReducer} from "redux-form";
import auth from '../../features/auth/authSlice';
import idea from '../../features/idea/ideaSlice';
import profile from '../../features/user/profileSlice';
import { reducer as ToastrReducer } from 'react-redux-toastr';

export default combineReducers({
  auth,
  idea,
  profile,
  form: FormReducer,
  toastr: ToastrReducer
});
import {  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES
} from './profileConstants';
import { LIKE_IDEA } from '../idea/ideaConstants';

const initialState = {
  profile: null,
  profiles: null,
  ideas: null,
  loading: true,
  error: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload.profile,
        ideas: payload.ideas,
        loading: false
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    // case LIKE_IDEA:
    //   return {
    //     ...state,
    //     ideas: state.ideas.map(idea =>
    //       idea._id === payload.id ? { ...idea, likes: payload.likes } : idea
    //     ),
    //   };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false
      };
    default:
      return state;
  }
}
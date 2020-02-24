import {
  ADD_COMMENT,
  ADD_IDEA,
  DELETE_IDEA,
  GET_IDEA,
  GET_IDEAS,
  IDEA_ERROR, LIKE_COMMENT,
  LIKE_IDEA, REMOVE_COMMENT
} from './ideaConstants';

const initialState = {
  ideas: [],
  idea: null,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_IDEAS:
      return {
        ...state,
        ideas: payload,
      };
    case GET_IDEA:
      return {
        ...state,
        idea: payload,
      };
    case ADD_IDEA:
      return {
        ...state,
        ideas: [payload, ...state.ideas],
      };
    case DELETE_IDEA:
      return {
        ...state,
        ideas: state.ideas.filter(idea => idea._id !== payload),
      };
    case IDEA_ERROR:
      return {
        ...state,
        error: payload,
      };
    case LIKE_IDEA:
      return {
        ...state,
        ideas: state.ideas.map(idea =>
          idea._id === payload.id ? { ...idea, likes: payload.likes } : idea
        ),
      };
    case ADD_COMMENT:
      return {
        ...state,
        idea: { ...state.idea, comments: payload },
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        idea: {
          ...state.idea,
          comments: state.idea.comments.filter(
            comment => comment._id !== payload
          )
        },
      };
    case LIKE_COMMENT:
      return {
        ...state,
        idea: {
          ...state.idea,
          comments: state.idea.comments.map(comment =>
          comment._id === payload.id ? { ...comment, likes: payload.likes } : comment)
        }
      };
    default:
      return state;
  }
}

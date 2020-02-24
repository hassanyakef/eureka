import {
  ADD_COMMENT,
  ADD_IDEA,
  DELETE_IDEA,
  GET_IDEA,
  GET_IDEAS,
  IDEA_ERROR, LIKE_COMMENT,
  LIKE_IDEA, REMOVE_COMMENT, SORT_COMMENT_BY_DATE, SORT_COMMENT_BY_LIKES
} from './ideaConstants';

const initialState = {
  ideas: [],
  idea: null,
  error: {},
  sortComment: 'byDate'
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
    case SORT_COMMENT_BY_DATE:
      const commentsByDate = state.idea.comments;
      commentsByDate.sort((a, b) => {
        // Use toUpperCase() to ignore character casing
        const commentA = a.commentDate;
        const commentB = b.commentDate;

        let comparison = 0;
        if (commentA > commentB) {
          comparison = 1;
        } else if (commentA < commentB) {
          comparison = -1;
        }
        return comparison;
      });

      return {
        ...state,
        sortComment: 'byDate',
        comments: commentsByDate
      };
    case SORT_COMMENT_BY_LIKES:
      const commentsByLikes = state.idea.comments;
      commentsByLikes.sort((a, b) => {
        // Use toUpperCase() to ignore character casing
        const commentA = a.likes.length;
        const commentB = b.likes.length;

        let comparison = 0;
        if (commentA > commentB) {
          comparison = 1;
        } else if (commentA < commentB) {
          comparison = -1;
        }
        return comparison;
      });

      return {
        ...state,
        sortComment: 'byLikes',
        comments: commentsByLikes
      };
    default:
      return state;
  }
}

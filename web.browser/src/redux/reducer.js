import {
  UPDATE_VOTE,
  SORT_POPULAR,
  SORT_NEWEST
} from './actions';

import { data } from '../mock-data';

const initialData = data.posts;

export function SortPosts(state = initialData, action) {
  switch (action.type) {
    case SORT_POPULAR:
      return state.sort((a, b) => b.votes - a.votes);
    case SORT_NEWEST:
      return state.sort((a, b) => b.id - a.id);
    default:
      return state;
  }
}

export function UpVotes(state, action) {
  switch (action.type) {
    case UPDATE_VOTE:
      return [...state, { votes: action.votes }];
    default:
      return state;
  }
}


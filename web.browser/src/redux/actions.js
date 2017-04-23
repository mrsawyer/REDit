// String Contstants

export const UPDATE_VOTE = 'UPDATE_VOTE';
export const SORT_POPULAR = 'SORT_POPULAR';
export const SORT_NEWEST = 'SORT_NEWEST';

// Function
export const updateVote = upvote => ({ type: UPDATE_VOTE, votes: upvote });

export const sortPopular = posts => ({ type: SORT_POPULAR, posts });

export const sortNewest = posts => ({ type: SORT_NEWEST, posts });
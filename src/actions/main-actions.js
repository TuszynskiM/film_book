//actions

export const START_FETCHING_VIDEOS = 'START_FETCHING_VIDEOS';
export const STOP_FETCHING_VIDEOS = 'STOP_FETCHING_VIDEOS';
export const FETCH_VIDEOS_SUCCESS = 'FETCH_VIDEOS_SUCCESS';
export const FETCH_VIDEOS_FAIL = 'FETCH_VIDEOS_FAIL';

export const HAS_SEARCH = 'HAS_SEARCH';

//action creators

export const startFetchingVideos = () => ({
  type: START_FETCHING_VIDEOS
})
export const stopFetchingVideos = () => ({
  type: STOP_FETCHING_VIDEOS
})
export const fetchVideosSuccess = payload => ({
  type: FETCH_VIDEOS_SUCCESS,
  payload
})
export const fetchingVideosFail = payload => ({
  type: FETCH_VIDEOS_FAIL,
  payload
})

export const setHasSearch = payload => ({
  type: HAS_SEARCH,
  payload
});
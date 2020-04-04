import {
  FETCH_VIDEOS_FAIL,
  FETCH_VIDEOS_SUCCESS,
  START_FETCHING_VIDEOS,
  STOP_FETCHING_VIDEOS
} from '../actions/main-actions';

const initState = {
  videosList: [],
  fetchingVideos: false,
  fetchingVideosError: false
};

export default (state = initState, {type, payload}) => {
  switch (type) {
    case FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        videosList: payload,
        fetchingVideos: false,
        fetchingVideosError: false
      };
    case FETCH_VIDEOS_FAIL:
      return {
        ...state,
        payload,
        fetchingVideosError: true
      };
    case START_FETCHING_VIDEOS:
      return {
        ...state,
        fetchingVideos: true,
      };
    case STOP_FETCHING_VIDEOS:
      return {
        ...state,
        fetchingVideos: false,
      };

    default :
      return state
  }
}
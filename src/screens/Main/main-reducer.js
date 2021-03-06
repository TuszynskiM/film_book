import {
  FETCH_VIDEOS_FAIL,
  FETCH_VIDEOS_SUCCESS, HAS_SEARCH,
  START_FETCHING_VIDEOS,
  STOP_FETCHING_VIDEOS, SWITCH_SETTING_MODAL
} from './main-actions';

const initState = {
  videosList: [],
  hasModalOpen: false,
  hasSearch: false,
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

    case HAS_SEARCH:
      return {
        ...state,
        hasSearch: payload
      }

    case SWITCH_SETTING_MODAL:
      return {
        ...state,
        hasModalOpen: payload
      }

    default :
      return state
  }
}
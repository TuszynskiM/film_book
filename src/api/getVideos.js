import {fetchingVideosFail, fetchVideosSuccess, startFetchingVideos, stopFetchingVideos} from '../actions/main-actions';
import {getDataFromUrl} from './generalAPI';

export const getVideos = () => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDTsR00_je4d0VoBRuJSnL08e8AJjH9xa8&type=video`
  return dispatch => {
    dispatch(startFetchingVideos())
    getDataFromUrl(url)
        .then(resp => {
          dispatch(fetchVideosSuccess(resp.data.items))
        })
        .catch(err => {
          dispatch(fetchingVideosFail(err))
        })
        .finally(() => {
          dispatch(stopFetchingVideos())
        })
  }
}
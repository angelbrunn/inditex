import API from './axios.api';

export const getPodcastsService = async (url = '') => {
  const response = await API.get(url);
  return response.data;
};

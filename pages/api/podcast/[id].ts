import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const getPodcatsDetailHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id } = req.query;

  try {
    const response = await axios.get(
      `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=100`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export default getPodcatsDetailHandler;

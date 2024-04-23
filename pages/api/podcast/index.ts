import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const getPodcatsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get(
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export default getPodcatsHandler;

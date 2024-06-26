'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';

import ROUTES from '@/lib/constants/routes';
import Loading from '@/components/Loading';
import { useGetData } from '@/lib/hooks/useGetData';
import { changeDate, isLocal, millisToTime } from '@/lib/helpers/functions';

import { PodcastEpisodesWrapper } from './style';

const PodcastEpisodes = () => {
  const params: any = useParams();
  const { podcastId } = params;
  const baseUrl = isLocal() ? ROUTES.baseUrl.local : '';
  const { data, loading, error } = useGetData(
    `${baseUrl}/api${ROUTES.router.podcast}/${podcastId}`
  );

  const entriesEpisodes = data?.results;

  const info =
    entriesEpisodes && entriesEpisodes[0]
      ? entriesEpisodes[0]
      : { trackCount: 0 };

  const { trackCount } = info;

  let copyArr =
    entriesEpisodes && entriesEpisodes[0] ? [...entriesEpisodes] : [];

  if (Array.isArray(entriesEpisodes) && entriesEpisodes.length > 0) {
    copyArr.shift();
  }

  {
    if (loading || error) return <Loading loading={loading} error={error} />;
  }

  return (
    <>
      <PodcastEpisodesWrapper>
        <div className="episodes">Episodes: {trackCount}</div>
      </PodcastEpisodesWrapper>
      <PodcastEpisodesWrapper style={{ marginTop: '50px' }}>
        <div className="list-header">
          <div className="name-header">Title</div>
          <div className="date-header">Date</div>
          <div className="duration-header">Duration</div>
        </div>
        {data && copyArr
          ? copyArr.map((item: any, index: number) => {
              return (
                <motion.div
                  key={item.trackId}
                  className="product-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="list-item">
                    <Link
                      href={`${ROUTES.router.podcast}/${podcastId}/episode/${item.episodeGuid}`}
                    >
                      <div className="name">{item.trackName}</div>
                      <div className="date">{changeDate(item.releaseDate)}</div>
                      <div className="duration">
                        {millisToTime(item.trackTimeMillis)}
                      </div>
                    </Link>
                  </div>
                </motion.div>
              );
            })
          : null}
      </PodcastEpisodesWrapper>
    </>
  );
};

export default PodcastEpisodes;

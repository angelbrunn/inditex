'use client';
import Link from 'next/link';
import { redirect, useParams } from 'next/navigation';

import AudioPodcast from '@/components/AudioPodcast';
import Loading from '@/components/Loading';
import ROUTES from '@/lib/constants/routes';
import { useGetData } from '@/lib/hooks/useGetData';
import { createMarkup, isLocal } from '@/lib/helpers/functions';

import { PodcastEpisodesAudioWrapper } from '../style';

const PodcastEpisodeDetail = () => {
  const params: any = useParams();
  const { podcastId, episodeId } = params;
  const baseUrl = isLocal() ? ROUTES.baseUrl.local : '';
  const { data, loading, error } = useGetData(
    `${baseUrl}/api${ROUTES.router.podcast}/${podcastId}`
  );

  const entriesEpisodes = data?.results;

  const currentPodcastEpisode =
    entriesEpisodes &&
    entriesEpisodes.find((en: any) => en?.episodeGuid === episodeId);

  if (data && !currentPodcastEpisode) {
    redirect(ROUTES.router.podcast);
  }

  {
    if (loading || error) return <Loading loading={loading} error={error} />;
  }

  return (
    <PodcastEpisodesAudioWrapper data-testid="podcast-episode-detail">
      <div className="go-back">
        <Link href={`${ROUTES.router.podcast}/${podcastId}`}>Back</Link>
      </div>
      {data && currentPodcastEpisode ? (
        <div role="podcast-episode-detail">
          <h3>{currentPodcastEpisode.trackName}</h3>
          <p
            dangerouslySetInnerHTML={createMarkup(
              currentPodcastEpisode.description
            )}
          />
          <AudioPodcast url={currentPodcastEpisode.episodeUrl} />
        </div>
      ) : null}
    </PodcastEpisodesAudioWrapper>
  );
};

export default PodcastEpisodeDetail;

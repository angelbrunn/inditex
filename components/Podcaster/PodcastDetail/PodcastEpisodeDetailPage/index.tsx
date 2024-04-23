'use client';
import CardXl from '@/components/Cards/CardXl';
import PodcastEpisodeDetail from '../PodcastEpisodeDetail';

import { PodcastDetailWrapper } from './style';

export default function PodcastEpisodeDetailPage() {
  return (
    <PodcastDetailWrapper>
      <div className="card-detail">
        <CardXl />
      </div>
      <div className="episodes-detail">
        <PodcastEpisodeDetail />
      </div>
    </PodcastDetailWrapper>
  );
}

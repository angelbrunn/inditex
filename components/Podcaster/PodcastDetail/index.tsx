'use client';
import CardXl from '@/components/Cards/CardXl';
import PodcastEpisodes from '@/components/Podcaster/PodcastDetail/PodcastEpisodes';

import { PodcastDetailWrapper } from './style';

export default function PodcastDetail() {
  return (
    <PodcastDetailWrapper>
      <div className="card-detail">
        <CardXl />
      </div>
      <div className="episodes-detail">
        <PodcastEpisodes />
      </div>
    </PodcastDetailWrapper>
  );
}

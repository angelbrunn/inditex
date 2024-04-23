import { AudioPodcastProps } from './contracts';
import { AudioContainer, AudioElement } from './style';

const AudioPodcast: React.FC<AudioPodcastProps> = ({ url }) => (
  <AudioContainer>
    {!!url && <AudioElement controls src={url} data-testid="audio-element" />}
  </AudioContainer>
);

export default AudioPodcast;

import EpisodeCard from '@components/EpisodeCard';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';

const episodes = await useFetch(endPoints.episodes);
console.log('Episodios: ', episodes);

const Episodes = () => {
  return (
    <div className="flex justify-center pt-24">
      <EpisodeCard></EpisodeCard>
    </div>
  );
};

export default Episodes;

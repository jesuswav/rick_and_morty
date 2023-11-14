import { useEffect, useState } from 'react';
import EpisodeCard from '@components/EpisodeCard';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import Paginate from '@components/Paginate';
import { Pagination } from '@mui/material';

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: fetchedEpisodes,
    loading,
    error,
  } = useFetch(endPoints.episodes, currentPage);

  useEffect(() => {
    if (!loading && !error) {
      setEpisodes(fetchedEpisodes.results);
      console.log('Pages', fetchedEpisodes.info.pages);
    }
  }, [fetchedEpisodes, loading, error]);

  return (
    <div>
      <div>
        <div className="flex h-10 items-center justify-center w-full pt-32 max-sm:pt-32">
          <Paginate
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            pages={fetchedEpisodes.info?.pages}
          ></Paginate>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 p-10 max-sm:flex flex-col max-sm:p-5 items-center w-full">
        {episodes.map((item) => (
          <EpisodeCard key={item.id} data={item}></EpisodeCard>
        ))}
      </div>
    </div>
  );
};

export default Episodes;

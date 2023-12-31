import { useEffect, useState } from 'react';
import EpisodeCard from '@components/EpisodeCard';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import Paginate from '@components/Paginate';
import Footer from '@common/Footer';
import Search from '@components/Search';
import { CharacterLoading } from '@components/CharacterLoading';

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
    <div className="Appears mt-24 max-sm:mt-24 max-sm:px-0 w-full">
      <div>
        <Search></Search>
      </div>
      <div className="grid grid-cols-3 gap-6 pt-8 max-lg:grid-cols-2 p-4 px-10 max-sm:flex flex-col max-sm:p-5 items-center w-full">
        {loading && <CharacterLoading />}
        {!loading &&
          episodes.map((item) => (
            <EpisodeCard key={item.id} data={item}></EpisodeCard>
          ))}
      </div>
      <div className="flex pt-10 h-10 items-center justify-center w-full">
        <Paginate
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          pages={fetchedEpisodes.info?.pages}
        ></Paginate>
      </div>
      <div className="w-full mt-5">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Episodes;

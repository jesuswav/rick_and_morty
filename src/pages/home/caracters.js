import Card from '@components/Card';
import Paginate from '@components/Paginate';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';

const characters = await useFetch(endPoints.characters);
console.log('Personajes: ', characters);
console.log(endPoints.characters);

const Caracters = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 p-10 pt-24 max-sm:pt-24 max-sm:flex flex-col max-sm:p-5 items-center w-full">
        {characters.map((item) => (
          <Card key={item?.id} data={item}></Card>
        ))}
      </div>
      <div className="flex h-10 items-center justify-center w-full">
        <Paginate></Paginate>
      </div>
    </div>
  );
};

export default Caracters;

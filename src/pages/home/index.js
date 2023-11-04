import Card from '@components/Card';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';

const personajes = [
  {
    id: 1,
    name: 'Rick Sanchez',
    img: 'https://qph.cf2.quoracdn.net/main-qimg-3adb8da57fd97e7f7ea812ad324f70ab-pjlq',
    earth: 'C-138',
    age: 52,
  },
  {
    id: 2,
    name: 'Rick Sanchez',
    img: 'https://qph.cf2.quoracdn.net/main-qimg-3adb8da57fd97e7f7ea812ad324f70ab-pjlq',
    earth: 'C-138',
    age: 52,
  },
  {
    id: 3,
    name: 'Rick Sanchez',
    img: 'https://qph.cf2.quoracdn.net/main-qimg-3adb8da57fd97e7f7ea812ad324f70ab-pjlq',
    earth: 'C-138',
    age: 52,
  },
];

const characters = await useFetch(endPoints.characters);
console.log('Personajes: ', characters);

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 p-10 pt-24 max-sm:pt-24 max-sm:flex flex-col max-sm:p-5 items-center w-full">
      {characters.map((item) => (
        <Card key={item.id} data={item}></Card>
      ))}
    </div>
  );
};

export default Home;

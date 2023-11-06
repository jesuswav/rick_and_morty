const Card = (data) => {
  return (
    <div className="bg-color-fondo-oscuro flex flex-row w-full max-sm:w-11/12 justify-start pl-5 py-4 border-2 rounded-3xl border-solid border-gray-400 cursor-pointer hover:scale-105 duration-200">
      <div className="flex">
        <img className="h-32 rounded-2xl object-cover" src={data.data.image} alt="Image"></img>
      </div>
      <div className="flex flex-col ml-4">
        <h3 className="font-bold">{data.data.name}</h3>
        <h3 className="text-gray-300">{data.data.origin.name}</h3>
        <h3 className={data.data.status === 'Alive' ? 'text-green-400': 'text-red-600'} >{data.data.status}</h3>
        <h3 className="text-gray-400">{data.data.species}</h3>
      </div>
    </div>
  );
};

export default Card;

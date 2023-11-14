const Paginate = ({ setCurrentPage, currentPage, pages }) => {
  const addCurrentPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const quitCurrentPage = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <div className="flex flex-row items-center justify-center mb-10 select-none">
      <div
        onClick={quitCurrentPage}
        className={
          currentPage < 2
            ? 'pointer-events-none cursor-pointer'
            : 'cursor-pointer p-2'
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div
        className="border-2 bg-gray-600 font-semibold rounded-md mx-2 cursor-pointer border-white p-1 px-3"
        onClick={() => setCurrentPage(currentPage)}
      >
        {currentPage}
      </div>
      <div
        className="border-2 bg-gray-600 font-semibold rounded-md mx-2 cursor-pointer border-white p-1 px-3"
        onClick={() => setCurrentPage(currentPage)}
      >
        {currentPage + 1}
      </div>
      <div
        className="border-2 bg-gray-600 font-semibold rounded-md mx-2 cursor-pointer border-white p-1 px-3"
        onClick={() => setCurrentPage(currentPage)}
      >
        {currentPage + 2}
      </div>
      <div
        onClick={addCurrentPage}
        className={
          currentPage >= pages
            ? 'pointer-events-none cursor-pointer'
            : 'cursor-pointer p-2'
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Paginate;

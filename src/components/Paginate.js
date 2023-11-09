const Paginate = ({ setCurrentPage, currentPage }) => {

  var pages = [currentPage, currentPage + 1, currentPage + 2, currentPage + 3, currentPage + 4];

  const addCurrentPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const quitCurrentPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex flex-row items-center justify-center mb-10 select-none">
      <div onClick={quitCurrentPage} className={pages[0] < 2 ? 'pointer-events-none cursor-pointer' : 'cursor-pointer p-2'}>
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
      {pages.map((item) => (
        <div
          className="border-2 font-semibold rounded-md mx-2 cursor-pointer border-white p-1 px-3"
          key={item}
        >
          {item}
        </div>
      ))}
      <div onClick={addCurrentPage} className="cursor-pointer p-2">
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

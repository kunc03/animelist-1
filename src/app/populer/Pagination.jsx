import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr';

const Pagination = ({ page, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((nextState) => nextState + 1);

    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);

    scrollTop();
  };

  const handleMinusPage = () => {
    setPage((minusState) => minusState - 2);

    scrollTop();
  };

  const handlePlusPage = () => {
    setPage((plusState) => plusState + 2);

    scrollTop();
  };

  return (
    <div className="flex justify-center p-4 text-cyan-100 text-xl mt-6 mb-10 rounded-t-xl">
      <div className="flex justify-center items-center">
        {page <= 1 ? null : (
          <button onClick={handlePrevPage} className="hover:scale-105 pl-1 w-14 h-14 ">
            <CaretLeft size={24} />
          </button>
        )}

        <div className="flex justify-center items-center text-sm">
          {page <= 2 ? null : (
            <button className="w-12 h-12" onClick={handleMinusPage}>
              {page - 2}
            </button>
          )}
          {page <= 1 ? null : (
            <button className="w-12 h-12" onClick={handlePrevPage}>
              {page - 1}
            </button>
          )}
          <button className="border-2 border-cyan-400 w-12 h-12 rounded-full text-cyan-400">{page}</button>
          <button className="w-12 h-12" onClick={handleNextPage}>
            {page + 1}
          </button>
          <button className="w-12 h-12" onClick={handlePlusPage}>
            {page + 2}
          </button>
          <button className="w-12 h-12"> ... </button>
        </div>

        <button onClick={handleNextPage} className="w-14 h-14 pl-6">
          <CaretRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

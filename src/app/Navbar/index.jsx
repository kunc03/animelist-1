import Link from 'next/link';
import InputSearch from './inputSearch';
import UserActionButton from './userActionButton';

const Navbar = () => {
  return (
    <header className=" bg-cyan-400">
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center px-[8%] py-4">
        <Link href="/" className="text-2xl flex font-bold text-cyan-950 md:mb-0 mb-4">
          BAGANIME
        </Link>

        <div className="flex md:flex-row flex-col items-center gap-2">
          <InputSearch />
          <UserActionButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

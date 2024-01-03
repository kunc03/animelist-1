import Link from 'next/link';
import authUserSession from '../libs/auth-libs';

const UserActionButton = async () => {
  const user = await authUserSession();

  const actionLabel = user ? 'Sign Out' : 'Sign In';
  //   const actionURL = user ? '../api/auth/signout' : 'api/auth/signin';

  return (
    <div className="flex justify-between items-center text-center md:w-[45%] sm:w-[65%] w-[100%] md:mt-0 mt-4 gap-2">
      {user ? (
        <Link href={`../users/dashboard`} className="text-sm hover:bg-cyan-400 hover:border-cyan-950 hover:text-cyan-950 border-2 border-cyan-950 bg-cyan-950 text-cyan-400 py-1 px-2 rounded-lg transition ease-in-out md:mr-0 mr-1 ">
          Dashboard
        </Link>
      ) : null}
      <Link href="../login" className="text-sm hover:bg-cyan-400 hover:border-cyan-950 hover:text-cyan-950 border-2 border-cyan-950 bg-cyan-950 text-cyan-400 py-1 px-2 rounded-lg transition ease-in-out md:mr-0 mr-1">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;

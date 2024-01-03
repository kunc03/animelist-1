import Image from 'next/image';
import authUserSession from '../../libs/auth-libs';

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="h-screen flex md:flex-row sm:flex-row flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl">
          Hello <span className="font-bold">{user.name}</span>
        </h1>
        <Image src={user.image} alt="..." width={250} height={250} className="w-16 h-16 rounded-full" />
      </div>
    </div>
  );
};

export default Page;

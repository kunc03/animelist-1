import { getServerSession } from 'next-auth';
import { authOption } from '../api/auth/[...nextauth]/route.js';

const authUserSession = async () => {
  const session = await getServerSession(authOption);

  return session?.user;
};

export default authUserSession;

import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

const HeaderSeason = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-cemter pl-4 pr-10 text-sky-100 py-4 mb-4 rounded-xl bg-cyan-950 shadow-md shadow-cyan-400">
      <h1 className="flex md:text-xl text-lg pb-1 border-l-4 border-cyan-400 pl-6">{title}</h1>
      {linkHref && linkTitle ? (
        <Link className="flex text-sm justify-between items-center hover:text-sky-300 w-28" href={linkHref}>
          {linkTitle} <ArrowRight size={20} />
        </Link>
      ) : null}
    </div>
  );
};

export default HeaderSeason;

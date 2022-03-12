import type { NextPage } from 'next';
import Link from 'next/link';
import cssList from 'public/cssList';

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-full flex-col space-y-4 bg-orange-100 p-6">
      {cssList.map((css, index) => (
        <Link href={`/css/${index}`} key={index}>
          <div className="cursor-pointer rounded-lg border-4 border-blue-200 p-3 transition hover:border-blue-300">
            <a className="font-semibold text-gray-500">{css.title}</a>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;

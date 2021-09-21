import Head from "next/head";
import { HeartIcon } from "@heroicons/react/solid";
import NavItem from "../components/NavItem";
import { navigationData } from "../data/NavigationData";

export default function Home() {
  return (
    <div className='flex flex-col items-start p-5'>
      <Head>
        <title>Sidebar UI -@omar.code</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex items-center space-x-2 mb-6 '>
        <HeartIcon className='w-8 text-blue-600' />
        <p className='text-xl font-semibold hidden md:inline'>Healthy</p>
      </div>
      <main className='flex flex-col space-y-5 '>
        {navigationData.map(({ id, icon, title }) => (
          <NavItem
            key={id}
            index={id}
            icon={icon}
            title={title}
            onclick={() => console.log({ id })}
          />
        ))}
      </main>
    </div>
  );
}

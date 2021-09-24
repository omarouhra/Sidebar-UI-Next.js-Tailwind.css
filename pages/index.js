import Head from "next/head";
import { HeartIcon } from "@heroicons/react/solid";
import NavItem from "../components/NavItem";
import { navigationData } from "../data/NavigationData";
import { useState } from "react";

export default function Home() {
  const [isActive, setIsActive] = useState(1);

  const turnToActive = () => {
    setIsActive(navigationData.id);
    console.log(isActive);
  };
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
          <section
            className={
              isActive === id
                ? "bg-blue-400 transition text-white rounded-md duration-200  "
                : "bg-white text-black transition  duration-200 "
            }
            onClick={() => setIsActive(id)}>
            <NavItem key={id} index={id} icon={icon} title={title} />
          </section>
        ))}
      </main>
    </div>
  );
}

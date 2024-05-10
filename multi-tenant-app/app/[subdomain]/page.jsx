'use client';

import Link from "next/link";
import { useParams } from "next/navigation";
import { subDomainData } from "../utils/subDomainData";
export default function SubDomainComponent() {
  const params = useParams();
  const tenant = params.subdomain;

  console.log("params : -> ", params);
  console.log(tenant)


  return (

    // <div>
    //   {subDomainData.subDomain1.content}
    // </div>

    <div className='flex place-content-center'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={subDomainData.subDomain1.image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{subDomainData.subDomain1.heading}</div>
          <p className={subDomainData.subDomain1.styles}>
            {subDomainData.subDomain1.content}
          </p>
        </div>
      </div>
    </div>
  )


  // return (
  //   <div className="flex flex-col min-h-screen">
  //     <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
  //       <Link className="flex items-center" href="#">
  //         <svg
  //           className=" h-6 w-6"
  //           fill="none"
  //           height="24"
  //           stroke="currentColor"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth="2"
  //           viewBox="0 0 24 24"
  //           width="24"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
  //           <path d="M3 6h18" />
  //           <path d="M16 10a4 4 0 0 1-8 0" />
  //         </svg>
  //         <span className="sr-only">Welcome to {tenant}</span>
  //       </Link>
  //       <nav className="flex gap-4 sm:gap-6">
  //         <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
  //           Home
  //         </Link>
  //         <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
  //           Shop
  //         </Link>
  //         <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
  //           About
  //         </Link>
  //         <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
  //           Contact
  //         </Link>
  //       </nav>
  //     </header>
  //     <main className="flex-1">
  //       <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900 text-center">
  //         <h1 className="text-4xl font-bold mb-4">Welcome to {tenant}</h1>
  //         <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
  //           The best place for your online shopping needs.
  //         </p>
  //         <Link href="#">
  //           <button>Shop Now</button>
  //         </Link>
  //       </section>
  //     </main>
  //   </div>
  // )


}



















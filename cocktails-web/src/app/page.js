'use client';
import Image from 'next/image';

import { Button } from 'flowbite-react';
export default function Home() {
    return (
        <main className="text-gray-500">
            {/* hero section */}
            <section class="bg-center bg-no-repeat bg-[url('https://res.cloudinary.com/dzyllqqxi/image/upload/v1692819606/pexels-chris-f-1283219_z11q9e.jpg')] bg-cover bg-gray-700 bg-blend-multiply rounded-lg drop-shadow-lg my-8 ">
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                        We invest in the world’s potential
                    </h1>
                    <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        Here at Flowbite we focus on markets where technology,
                        innovation, and capital can unlock long-term value and
                        drive economic growth.
                    </p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <button class="bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center rounded-full text-md text-white px-4 py-2 border-2  hover:from-transparent hover:to-transparent hover:border border-gray-200">
                            <span> Usar Buscador</span>
                            <svg
                                class="w-3.5 h-3.5 ml-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </button>
                        <a
                            href="#"
                            class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-full border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </section>
            {/* cards section */}
            <section class="">
                <div class="pb-4 mx-auto max-w-screen-xl lg:pb-4">
                    <div class="grid md:grid-cols-2 gap-8 mb-8">
                        <div class="bg-gray-50  border border-gray-200  rounded-lg p-8 md:p-12 shadow-lg  ">
                            <a
                                href="#"
                                class="bg-primary-light text-purple-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
                            >
                                <svg
                                    class="w-2.5 h-2.5 mr-1.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 18"
                                >
                                    <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                                </svg>
                                Design
                            </a>
                            <h2 class="text-gray-900 text-3xl font-medium mb-6">
                                Start with Flowbite Design System
                            </h2>
                            <p class="text-lg font-normal text-gray-500  mb-4">
                                Static websites are now used to bootstrap lots
                                of websites and are becoming the basis for a
                                variety of tools that even influence both web
                                designers and developers.
                            </p>
                            <a
                                href="#"
                                class="text-primary  hover:underline font-medium text-lg inline-flex items-center"
                            >
                                Read more
                                <svg
                                    class="w-3.5 h-3.5 ml-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div class="bg-gray-50 border border-gray-200  rounded-lg p-8 md:p-12 shadow-md ">
                            <a
                                href="#"
                                class="bg-primary-light text-purple-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md  mb-2 "
                            >
                                <svg
                                    class="w-2.5 h-2.5 mr-1.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                                    />
                                </svg>
                                Code
                            </a>
                            <h2 class="text-gray-900  text-3xl font-medium mb-6">
                                Best react libraries around the web
                            </h2>
                            <p class="text-lg font-normal text-gray-500  mb-4">
                                Static websites are now used to bootstrap lots
                                of websites and are becoming the basis for a
                                variety of tools that even influence both web
                                designers and developers.
                            </p>
                            <a
                                href="#"
                                class="text-primary  hover:underline font-medium text-lg inline-flex items-center"
                            >
                                Read more
                                <svg
                                    class="w-3.5 h-3.5 ml-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="bg-gray-50  border border-gray-200 rounded-lg p-8 md:p-12 mb-8 shadow-md  bg-grad-main">
                        <a
                            href="#"
                            class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
                        >
                            <svg
                                class="w-2.5 h-2.5 mr-1.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 14"
                            >
                                <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
                            </svg>
                            Tutorial
                        </a>
                        <h2 class="text-black  text-3xl md:text-5xl font-extrabold mb-2">
                            How to quickly deploy a static website
                        </h2>
                        <p class="text-lg font-normal text-gray-200  mb-6">
                            Static websites are now used to bootstrap lots of
                            websites and are becoming the basis for a variety of
                            tools that even influence both web designers and
                            developers.
                        </p>
                        <a
                            href="#"
                            class="text-white  hover:underline font-medium text-lg inline-flex items-center"
                        >
                            Read more
                            <svg
                                class="w-3.5 h-3.5 ml-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </main>
        // <main className="flex min-h-screen flex-col items-center justify-between p-24">
        //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        //       Get started by editing&nbsp;
        //       <code className="font-mono font-bold">src/app/page.js</code>
        //     </p>
        //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        //       <a
        //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //       >
        //         By{' '}
        //         <Image
        //           src="/vercel.svg"
        //           alt="Vercel Logo"
        //           className="dark:invert"
        //           width={100}
        //           height={24}
        //           priority
        //         />
        //       </a>
        //     </div>
        //   </div>

        //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        //     <Image
        //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        //       src="/next.svg"
        //       alt="Next.js Logo"
        //       width={180}
        //       height={37}
        //       priority
        //     />
        //   </div>

        //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        //     <a
        //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 className={`mb-3 text-2xl font-semibold`}>
        //         Docs{' '}
        //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //         Find in-depth information about Next.js features and API.
        //       </p>
        //     </a>

        //     <a
        //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 className={`mb-3 text-2xl font-semibold`}>
        //         Learn{' '}
        //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //         Learn about Next.js in an interactive course with&nbsp;quizzes!
        //       </p>
        //     </a>

        //     <a
        //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 className={`mb-3 text-2xl font-semibold`}>
        //         Templates{' '}
        //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //         Explore the Next.js 13 playground.
        //       </p>
        //     </a>

        //     <a
        //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 className={`mb-3 text-2xl font-semibold`}>
        //         Deploy{' '}
        //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //         Instantly deploy your Next.js site to a shareable URL with Vercel.
        //       </p>
        //     </a>
        //   </div>
        // </main>
    );
}

import React from "react";
import CineMate from "./Cine.Mate.PNG";
import WhatsApp from "./whatsappclone.PNG";
import Glakon from "./glakon.PNG";
import Diamond from "./diamond.PNG";
import Zoom from "./zoom.PNG";
import Stefan from "./stefanordner.PNG";
import Smartphone from "./smartphone.PNG";
import Portfolio from "./portfolio.PNG";
function Work() {
  return (
    <div className="work">
      <section class="dark:bg-coolGray-800 dark:text-coolGray-100">
        <div class="container mx-auto flex flex-col p-6">
          <h2 class="py-4 text-3xl font-bold text-center">Work/Projects</h2>
          <h2 class="py-4 text-2xl font-bold text-center">
            More to come..Need more time..
          </h2>
          <div class="divide-y divide-coolGray-700">
            <div class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div class="flex items-center justify-center lg:col-span-1 col-span-full">
                <img
                  src={CineMate}
                  alt=""
                  class="mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div class="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span class="text-xs tracking-wider uppercase dark:text-violet-400">
                  Projektsemester
                </span>
                <span class="text-xl font-bold md:text-2xl">
                  Cine.Mate - A Tinder-Like Mobile App
                </span>
                <span class="mt-4 dark:text-coolGray-300">
                  Fully working developed mobile app using React Native. Please
                  understand that i won't be able to share my code to the
                  public, since Cine.Mate could provide a big deal at this
                  point. If you are interested in, I can provide You with the
                  code on a private github with shortened functionality and the
                  UI/UX Design.
                </span>
              </div>
            </div>
            <div class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div class="flex items-center justify-center lg:col-span-1 col-span-full">
                <a
                  href="https://github.com/Erikqtx/Whatsapp-Clone"
                  target="_blank"
                >
                  <img
                    src={WhatsApp}
                    alt=""
                    class="mx-auto rounded-lg shadow-lg"
                  />
                </a>
              </div>
              <div class="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span class="text-xs tracking-wider uppercase dark:text-violet-400">
                  Projekt 1
                </span>
                <span class="text-xl font-bold md:text-2xl">
                  Desktop WhatsApp Clone {"(Front- and Backend)"}
                </span>
                <span class="mt-4 dark:text-coolGray-300">
                  Fully working and deployed desktop WhatAapp clone as a
                  React-Application.
                </span>
              </div>
            </div>
            <div class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div class="flex items-center justify-center lg:col-span-1 col-span-full">
                <img
                  src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                  class="mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div class="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span class="text-xs tracking-wider uppercase dark:text-violet-400">
                  Projekt 2
                </span>
                <span class="text-xl font-bold md:text-2xl">
                  Amazon Clone {"(Front- & Backend)"}
                </span>
                <span class="mt-4 dark:bg-coolGray-800 dark:text-coolGray-300">
                  Full-Stack developed fully functional Amazon Clone - ready to
                  deploy via Firebase.
                </span>
              </div>
            </div>
            <div class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div class="flex items-center justify-center lg:col-span-1 col-span-full">
                <a href="https://glakon.de" target="_blank">
                  <img
                    src={Glakon}
                    alt=""
                    class="mx-auto rounded-lg shadow-lg"
                  />
                </a>
              </div>
              <div class="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span class="text-xs tracking-wider uppercase dark:text-violet-400">
                  Projekt 3
                </span>
                <span class="text-xl font-bold md:text-2xl">
                  Glakon IT Agency {"(If self-employment ever is an option)"}
                </span>
                <span class="mt-4 dark:text-coolGray-300">
                  Written in pure React.js at its best.
                </span>
              </div>
            </div>
            <div class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div class="flex items-center justify-center lg:col-span-1 col-span-full">
                <a href="">
                  <img
                    src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                    class="mx-auto rounded-lg shadow-lg"
                  />
                </a>
              </div>
              <div class="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span class="text-xs tracking-wider uppercase dark:text-violet-400">
                  Projekt 4
                </span>
                <span class="text-xl font-bold md:text-2xl">
                  Python - Data Science/CSV Analytics{" "}
                  {" (Need to check my MacBook for the files..)"}
                </span>
                <span class="mt-4 dark:text-coolGray-300">
                  Data Science project based on a real data set using numpy,
                  pandas, seaborne and many more Python Frameworks.
                </span>
              </div>
            </div>
            <div class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div class="flex items-center justify-center lg:col-span-1 col-span-full">
                <a
                  href="https://github.com/Erikqtx/Diamond-Kata"
                  target="_blank"
                >
                  <img
                    src={Diamond}
                    alt=""
                    class="mx-auto rounded-lg shadow-lg"
                  />
                </a>
              </div>
              <div class="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span class="text-xs tracking-wider uppercase dark:text-violet-400">
                  Projekt 5
                </span>
                <span class="text-xl font-bold md:text-2xl">
                  Diamond-Kata{" (Training React)"}
                </span>
                <span class="mt-4 dark:text-coolGray-300">
                  Simple start to learn React, demonstrating basic skills of
                  arrays and stuff.
                </span>
              </div>
            </div>
            <div class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div class="flex items-center justify-center lg:col-span-1 col-span-full">
                <a href="https://github.com/Erikqtx/ZoomClone" target="_blank">
                  <img src={Zoom} alt="" class="mx-auto rounded-lg shadow-lg" />
                </a>
              </div>
              <div class="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span class="text-xs tracking-wider uppercase dark:text-violet-400">
                  Projekt 6
                </span>
                <span class="text-xl font-bold md:text-2xl">
                  ZoomClone{" (Training React - Front- & Backend)"}
                </span>
                <span class="mt-4 dark:text-coolGray-300">
                  Started to work on a ZoomClone to train session handling and
                  the State management in React.
                </span>
              </div>
            </div>
            <div class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div class="flex items-center justify-center lg:col-span-1 col-span-full">
                <img
                  src={Smartphone}
                  alt=""
                  class="mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div class="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span class="text-xs tracking-wider uppercase dark:text-violet-400">
                  Projekt 7
                </span>
                <span class="text-xl font-bold md:text-2xl">
                  Product Showcase in Unity Engine{" (Training React)"}
                </span>
                <span class="mt-4 dark:text-coolGray-300">
                  Showcasing a Smartphone and learning how to render things
                  based on User-Input. Need to upload it on google drive to
                  showcase it, since the size is about ~10 GB.
                </span>
              </div>
            </div>
            <div class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div class="flex items-center justify-center lg:col-span-1 col-span-full">
                <a href="stefanordner.de" target="_blank">
                  <img
                    src={Stefan}
                    alt=""
                    class="mx-auto rounded-lg shadow-lg"
                  />
                </a>
              </div>
              <div class="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span class="text-xs tracking-wider uppercase dark:text-violet-400">
                  Projekt 8
                </span>
                <span class="text-xl font-bold md:text-2xl">
                  Stefan Ordner Financial Advisor
                  {" (Page will be re-build soon..)"}
                </span>
                <span class="mt-4 dark:text-coolGray-300">
                  Simple React One-Pager for a friend of mine.
                </span>
              </div>
            </div>
            <div class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div class="flex items-center justify-center lg:col-span-1 col-span-full">
                <a
                  href="https://github.com/Erikqtx/QuickPortfolio"
                  target="_blank"
                >
                  <img
                    src={Portfolio}
                    alt=""
                    class="mx-auto rounded-lg shadow-lg"
                  />
                </a>
              </div>
              <div class="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span class="text-xs tracking-wider uppercase dark:text-violet-400">
                  Projekt 9
                </span>
                <span class="text-xl font-bold md:text-2xl">
                  Quick Portfolio
                  {" (worktime: 4-6 hours)"}
                </span>
                <span class="mt-4 dark:text-coolGray-300">
                  Since this portfolio was built to showcase myself for you out
                  there, heres the page itself. This page took no longer then
                  4-6 hours and was created quick & dirty, since i had no time
                  next to work.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;

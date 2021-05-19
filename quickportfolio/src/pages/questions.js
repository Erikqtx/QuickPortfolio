import React from "react";

function Questions() {
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <h2 class="py-4 text-3xl font-bold text-center">
          Answering your questions.
        </h2>
        <div class="-my-8 divide-y-2 divide-gray-100">
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="text-2xl font-bold title-font text-gray-700">
                Question 1
              </span>
              <span class="mt-1 text-gray-500 text-sm"></span>
            </div>
            <div class="md:flex-grow">
              <h2 class=" text-gray-900 title-font mb-2 text-2xl font-bold">
                Precise Description for my studies
              </h2>
              <p class="leading-relaxed text-xl">
                My studies are called "Visualisierung und Interaktion in
                digitalen Medien".
                <br></br>
                Specialized in Web & Mobil Development/3D Interactive/Serious
                Gamedesign
              </p>
            </div>
          </div>
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="text-2xl font-bold title-font text-gray-700">
                Question 2
              </span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-bold text-gray-900 title-font mb-2">
                Where am i studying?
              </h2>
              <p class="leading-relaxed text-xl">
                I am studying at the University Of Applied Science Ansbach.
              </p>
            </div>
          </div>
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="text-2xl font-bold title-font text-gray-700">
                Question 3
              </span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-bold text-gray-900 title-font mb-2">
                When will the practical term start?
              </h2>
              <p class="leading-relaxed text-xl">
                The practical term will start on the 18th of October, but i can
                either start right after finishing my exams on the end of
                July/start of August or later then the 18th of October.
              </p>
            </div>
          </div>
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="text-2xl font-bold title-font text-gray-700">
                Question 4
              </span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-bold text-gray-900 title-font mb-2">
                Is there any specific project necessary for the practical term?
              </h2>
              <p class="leading-relaxed text-xl">
                The only necessary thing is that the project/job is related to
                my main specialization. So for me thats Web&Mobile Development!
                <br></br>
                The practical project can be used as a basis for the
                bachelor-thesis.
                <br></br>
                So there are no specific requirements except for my
                specialization.
              </p>
            </div>
          </div>
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="text-2xl font-bold title-font text-gray-700">
                Question 5
              </span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-bold text-gray-900 title-font mb-2">
                Timeline - Practical term, Bachelor, Master?
              </h2>
              <p class="leading-relaxed text-xl">
                18th October{" (Read above) "}Wintersemester 2021 - Practical
                term.
                <br></br>
                25th April 2022 - Summersemester 2022 - Bachelor thesis.
                <br></br>
                17th of October - Wintersemester 2022 - Start of the Master
                studies.
              </p>
            </div>
          </div>
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="text-2xl font-bold title-font text-gray-700">
                Question 6
              </span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-bold text-gray-900 title-font mb-2">
                Whats the main thing you focus on in your studies?
              </h2>
              <p class="leading-relaxed text-xl">
                {" "}
                Specialized in Web & Mobil Development/3D Interactive/Serious
                Gamedesign. You can check out my projects below.
              </p>
              <a
                href="/work"
                class="mt-6 inline-flex items-center px-6 py-3 text-white font-semibold bg-blue-700 rounded-md shadow-sm"
              >
                Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;

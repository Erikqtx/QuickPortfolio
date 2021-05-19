import React, { useEffect } from "react";
import Erik from "../Erik.jpg";
import Typical from "react-typical";
import "./home.css";
import ParticlesBg from "particles-bg";

function Home() {
  return (
    <div className="home">
      <ParticlesBg type="circle" bg={true} />
      <div className="bg-white max-w-md mx-auto rounded-xl shadow-2xl overflow-hidden md:max-w-screen-lg p-2">
        <img
          src={Erik}
          className="w-64 h-64 rounded-full mx-auto shadow-xl"
          alt="Erik Glaser"
        />
        <div className="pt-6 space-y-4">
          <h1 className="hi">Hi, I'm Erik Glaser</h1>
          <p className="typo">
            I'm a{" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Student at the University Of Applied Science in Ansbach 🎓.",
                1000,
                "Web developer 🖥️.",
                1000,
                "Mobile developer 📱.",
                1000,
                "Cat lover 🐾.",
                1000,
                "Music enthusiast 🎵.",
                1000,
              ]}
            />
          </p>
          <p></p>
          <p className="info">
            Welcome to my quickly build Portfolio for the district town hall in
            Ansbach.
          </p>
        </div>
      </div>

      <div class="max-w-screen-xl mx-auto px-4">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">
            <div class="flex flex-col flex-1 px-10 py-12 bg-white rounded-lg shadow-lg">
              <div class="flex-1">
                <h2 class="text-gray-900 text-2xl font-bold leading-snug">
                  Amazon Clone
                </h2>
                <p class="mt-2 text-lg">
                  Fully functional Amazon clone. Achieved with React.JS,
                  MongoDB, Express.JS, Node.JS and Cloud/Real-Time Storage from
                  Firebase.
                </p>
              </div>
              <a
                href="#"
                class="mt-6 inline-flex items-center px-6 py-3 text-white font-semibold bg-blue-700 rounded-md shadow-sm"
              >
                View Project
              </a>
            </div>
          </div>

          <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">
            <div class="flex flex-col flex-1 px-10 py-12 bg-white rounded-lg shadow-lg">
              <div class="flex-1">
                <h2 class="text-gray-900 text-2xl font-bold leading-snug">
                  Whatsapp Clone
                </h2>
                <p class="mt-2 text-lg">
                  Functional Whatsapp Desktop Clone. Achieved with React.JS,
                  Firebase.
                </p>
              </div>
              <a
                href="#"
                class="mt-6 inline-flex items-center px-6 py-3 text-white font-semibold bg-blue-700 rounded-md shadow-sm"
              >
                View project
              </a>
            </div>
          </div>
          <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">
            <div class="flex flex-col flex-1 px-10 py-12 bg-white rounded-lg shadow-lg">
              <div class="flex-1">
                <h2 class="text-gray-900 text-2xl font-bold leading-snug">
                  Cine.Mate - A Tinder-like App
                </h2>
                <p class="mt-2 text-lg">
                  Cine.Mate a fully responsive, universal mobile/desktop
                  application. Achieved with React Native, Firebase, Node.JS,
                  MongoDB.
                </p>
              </div>
              <a
                href="#"
                class="mt-6 inline-flex items-center px-6 py-3 text-white font-semibold bg-blue-700 rounded-md shadow-sm"
              >
                View project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

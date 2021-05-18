import React, { useEffect } from "react";
import Erik from "../Erik.jpg";
import Typical from "react-typical";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="max-w-md mx-auto bg-grey rounded-xl shadow-2xl overflow-hidden md:max-w-2xl p-2">
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
          <p className="info">
            Welcome to my quickly build Portfolio for the district town hall in
            Ansbach.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

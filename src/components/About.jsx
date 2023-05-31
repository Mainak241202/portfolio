import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-15">
          Hello, my name is Mainak Sadhya and I am an engineering student
          currently pursuing my BTech degree from Indian Institute of
          Information Technology design and manufacturing, Jabalpur from
          electronics and communications stream. My hobbies are travelling,
          reading different genres of books and also I have a huge interest in
          coding and developing awesome websites.
        </p>

        <br />

        <p className="text-xl">
          I give coding contests on different platforms from time to time and
          try to contribute to different projects as much as possible. Now
          coming to my technical skills, I am pretty much familiar with most of
          the basic tools of web developoment like HTML,CSS,JavaScript,Bootstrap,etc.
          and my specialization is in ReactJs,Tailwind CSS and Material UI. For
          backend, I use mostly NodeJs and Express and I can also handle
          databases such as MongoDb.
        </p>
      </div>
    </div>
  );
};

export default About;

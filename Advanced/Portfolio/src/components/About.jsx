import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-"
    >
      <div className="py-10 space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">About</h1>
          <p>
            Hello, I'm <span className="text-red-700">Shubham Vishwakarma</span>, a passionate Web
            developer with a keen eye for MERN Stack . With a background in IT,
            I strive to create impactful and visually stunning Software
            solutions that leave a lasting impression.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-green-600">
            Education & Training
          </h2>
          <p>
            [Degree/Certification], [Institution], [Year]
            [Degree/Certification], [Institution], [Year] [Relevant Course],
            [Platform/Institution], [Year]
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-600">
            Skills & Expertise
          </h2>
          <p>
            Proficient in [Programming Languages] Experienced with [Software
            Tools/Technologies] Strong grasp of [Design Principles/Concepts]
            Excellent problem-solving skills Effective communicator and
            collaborator
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-600">
            Achievements & Awards
          </h2>
          <p>
            [Award/Recognition], [Organization/Institution], [Year]
            [Achievement], [Organization/Platform], [Year]
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-600">
            Mission Statement
          </h2>
          <p>
            My mission is to leverage my skills and creativity to deliver
            innovative [Your Field] solutions that exceed client expectations
            and contribute positively to the digital landscape. I am committed
            to continuous learning and growth, always seeking new challenges and
            opportunities to expand my horizons.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

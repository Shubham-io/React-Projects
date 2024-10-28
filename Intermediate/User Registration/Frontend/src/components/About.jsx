import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";

const About = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex  mt-4 justify-center ">
        <div className="max-w-4xl mx-auto p-8">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="text-lg leading-relaxed mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            ad animi iusto saepe iste sint temporibus unde est natus nostrum
            voluptatibus, magni corrupti labore possimus quaerat quo et sed
            dolorem! Aperiam voluptas eum ratione, velit, nulla tenetur cum vel
            architecto aspernatur pariatur asperiores quas?
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            ad animi iusto saepe iste sint temporibus unde est natus nostrum
            voluptatibus, magni corrupti labore possimus quaerat quo et sed
            dolorem! Aperiam voluptas eum ratione, velit, nulla tenetur cum vel
            architecto aspernatur pariatur asperiores quas?
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            ad animi iusto saepe iste sint temporibus unde est natus nostrum
            voluptatibus, magni corrupti labore possimus quaerat quo et sed
            dolorem! Aperiam voluptas eum ratione, velit, nulla tenetur cum vel
            architecto aspernatur pariatur asperiores quas?
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;

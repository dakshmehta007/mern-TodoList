import React from "react";
import "./About.css"; // Make sure to create a CSS file for styling

const About = () => {
  return (
    <section id="about" className="about-section">
      <h1 className="about-heading">About This App</h1>
      <div className="about-content">
        <p>
          Hello! I am <strong>Daksh Mehta</strong>, a student pursuing B.Tech in
          Computer Science and Engineering from Amity University, Rajasthan.
          This Todo List app is a project I developed using the MERN stack
          (MongoDB, Express.js, React, and Node.js).
        </p>
        <p>
          The purpose of this app is to help users manage their tasks
          efficiently. You can add, edit, and delete tasks, and keep track of
          your daily to-dos with ease. The app is designed to be user-friendly
          and responsive, ensuring a seamless experience across all devices.
        </p>
        <p>
          I have always been passionate about web development and creating
          applications that solve real-world problems. This project has been a
          great learning experience, allowing me to apply my knowledge of the
          MERN stack and improve my skills in full-stack development.
        </p>
        <p>
          Thank you for using my Todo List app! I hope it helps you stay
          organized and productive. If you have any feedback or suggestions,
          feel free to reach out.
        </p>
      </div>
    </section>
  );
};

export default About;

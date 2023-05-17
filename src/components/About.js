import ownerImage from "../assets/IMG_0190.jpeg";

export default function About() {
  return (
    <section id="about" className="container mx-auto p-6 my-about">
      <article className="flex flex-col my-12 md:flex-row">
        <div className="flex flex-col md:w-1/2">
          <h2 className="font-bold text-2xl md:text-3xl mb-4">About Me</h2>
          <span className="font-bold text-2xl text-thickBrownishYellow font-lobster md:text-3xl">
            Backend Developer
          </span>

          <p className="mt-6 mb-4 font-Raleway text-left">
            I'm a passionate backend developer with experience in Python, JavaScript, and Node.js. My focus is on designing and implementing efficient and scalable APIs using frameworks like Flask, Express, and FastAPI.
          </p>

          <p className="mb-4 font-Raleway text-left">
            With experience in working with databases, including SQL and NoSQL, I specialize in data modeling, optimization, and ensuring the security and performance of backend systems.
          </p>

          <p className="font-Raleway text-left">
            I enjoy solving complex problems and creating seamless integrations between different systems. Continuously learning and exploring new technologies, I strive to write clean, maintainable code following best practices in backend development.
          </p>

          <button className="bg-thickBrownishYellow w-1/3 text-black mt-5 font-semibold py-2 rounded-full drop-shadow-md hover:bg-brownishYellow focus:outline-none">
            Hire Me
          </button>
        </div>
        <div className="my-image text-left mt-8 md:w-1/2 md:mt-8 md:ml-5">
          <img src={ownerImage} alt="owner" className="rounded-full image" />
        </div>
      </article>
    </section>
  );
}

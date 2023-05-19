import Carousel from 'react-material-ui-carousel';
import avatar_1 from '../assets/avatar_1.jpg';
import avatar_2 from '../assets/avatar_2.jpg';
import avatar_3 from '../assets/avatar_3.jpg';
import avatar_4 from '../assets/avatar_4.jpg';
import avatar_5 from '../assets/avatar_5.jpg';

export default function About() {

  const avatars = [ avatar_1, avatar_2, avatar_3, avatar_4, avatar_5 ]

  return (
    <section id="about" className="container mx-auto p-6 my-about">
      <article className="flex flex-col my-12 md:flex-row md:text-justify">
        <div className="flex flex-col md:w-1/2">
          <h2 className="font-bold text-2xl md:text-3xl mb-4">About Me</h2>
          <span className="font-bold text-2xl text-thickBrownishYellow font-lobster md:text-3xl">
            Software Engineer
          </span>

          <p className="mt-6 mb-4 font-Raleway md:w-[80%]">
            I'm a passionate software engineer with experience in Python,
            JavaScript, and Node.js. My focus is on designing and implementing
            efficient and scalable APIs using frameworks like Flask, Express,
            and FastAPI.
          </p>

          <p className="mb-4 font-Raleway md:w-[80%]">
            With experience in working with databases, including SQL and NoSQL,
            I specialize in backend development, optimization, and ensuring the
            security and performance of backend systems.
          </p>

          <p className="font-Raleway md:w-[80%]">
            I enjoy solving complex problems and creating seamless integrations
            between different systems. Continuously learning and exploring new
            technologies, I strive to write clean, maintainable code following
            best practices in backend development.
          </p>

          <button className="bg-thickBrownishYellow w-1/3 text-black mt-5 font-semibold py-2 rounded-full drop-shadow-md hover:bg-brownishYellow focus:outline-none">
            <a href="#contact">Hire Me</a>
          </button>
        </div>
        <div className="mt-8 md:w-1/2 md:mt-12 md:ml-8">
          {/* <img src={ownerImage} alt="owner" className="rounded-full image" /> */}
          <Carousel>
            {avatars.map((avatar, index) => (
              <img key={index} src={avatar} alt="Carousel Images" className={ `image rounded-lg w-full h-[24rem] md:h-[30rem] ` } />
            ))}
          </Carousel>
        </div>
      </article>
    </section>
  );
}

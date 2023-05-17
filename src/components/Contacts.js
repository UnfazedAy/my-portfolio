import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contacts() {
  return (
    <footer id="contact" className="mt-[7rem]">
      <div className="container flex flex-col mx-auto p-6 md:flex md:flex-row ">
        <div className="flex justify-center h-full space-x-4 mb-6 md:flex md:justify-start md:w-1/2">
          {/* Social maedia links */}
          <a
            href="https://web.facebook.com/ayomide.show"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-facebook" size="2xl" />
          </a>
          <a
            href="https://twitter.com/SoniyiAyomide_"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-twitter" size="2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/ayomide-soniyi-3151461a5/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2xl" />
          </a>
          <a
            href="mailto:ayomidesoniyi@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-solid fa-envelope" size="2xl" />
          </a>
          <a
            href="https://www.github.com/UnfazedAy"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-github" size="2xl" />
          </a>
        </div>
        <div>
          {/* Contact information */}
          <p className="text-left mb-2">
            Connect with me on any of my social handles either for hire,
            collaboration, or suggestions.
          </p>
          <span className="text-sm italic mt-2 text-thickBrownishYellow phone">
            <FontAwesomeIcon icon="fa-solid fa-phone" size="sm" color="white" /> +234
            7081082172, +234 8143939157
          </span>
        </div>
      </div>
      <p className="italic text-sm text-center pb-6 copyright">
        Copyright &copy; Ayomide Soniyi 2023, All Rights Reserved
      </p>
    </footer>
  );
}

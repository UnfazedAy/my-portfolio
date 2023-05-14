export default function ProjectCards(props) {
  return (
    <section className="p-4 w-full text-sm text-left md:text-base md:w-1/2 hover:cursor-pointer hover:opacity-80">
      <div className="p-6 shadow-2xl h-full w-full md:flex rounded-3xl">
        <div>
          <img src={props.image} alt="project preview" className="pb-6" />
          <p className="font-bold pb-2 text-thickBrownishYellow">
            {props.title}
          </p>

          <p className="pb-4">{props.description}</p>

          <ul className="flex text-sm flex-wrap justify-between list-disc list-inside font-light pb-2">
            {props.technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>

          <div className="space-x-4">
            <a
              href={props.websiteUrl}
              target="_blank"
              className=" pb-2 text-thickBrownishYellow hover:text-brownishYellow" rel="noreferrer"
            >
              visit site
            </a>

            <a
              href={props.githubUrl}
              target="_blank"
              className=" pb-2 text-thickBrownishYellow hover:text-brownishYellow" rel="noreferrer"
            >
              source code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Resume() {
  return (
    <div id="resume" className="container mx-auto p-6">
      <div className="flex justify-center md:justify-start">
        <button className="bg-thickBrownishYellow md:w-1/3 text-white mt-5 font-semibold py-3 px-3 rounded-full drop-shadow-md hover:bg-brownishYellow focus:outline-none">
          <a href="/Ayomide-Resume.pdf" download="Ayomide-Soniyi.pdf">
            Download My Resume
          </a>
        </button>
      </div>
    </div>
  );
}

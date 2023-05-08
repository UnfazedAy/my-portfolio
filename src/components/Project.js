export default function Project(props) {
  return (
    <section className="container mx-auto p-6">
      <h2 className="font-bold text-2xl md:text-3xl mb-4">Projects</h2>
      <div className="hidden md:flex md:flex-row">
        <img src={props.image} alt='' className="w-1/2 md:w-1/3" />
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>
    </section>
  );
}
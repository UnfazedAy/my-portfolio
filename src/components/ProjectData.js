import projectImage1 from '../assets/WOOFMATES_API_Image.png';
import projectImage2 from '../assets/DECOMPRESSOR_API_IMAGE.png';

const projectData = [
  {
    id: 1,
    image: projectImage1,
    title: 'WOOF MATES',
    description: "An API that provides functionality for dogs owners to connect with others dogs not just for breeding but more depending on the owner's choice either playmates and so on and find the best matches for their dog.",
    technologies: ['Python', 'FastAPI', 'sqlalchemy', 'PostgreSQL'],
    websiteUrl: 'https://woof-mates.onrender.com/docs',
    sourceCodeUrl: ''
  },

  {
    id: 2,
    image: projectImage2,
    title: 'DECOMPRESSOR',
    description: "An API that allows users to compress single and multiple images of large sizes.",
    technologies: ['Python', 'Flask', 'sqlalchemy', 'PostgreSQL'],
    websiteUrl: 'https://de-compressor.onrender.com/api/v1/docs',
    sourceCodeUrl: ''
  },
]

export default projectData
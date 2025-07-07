import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";


const myProjects = [
  {
    name: "Abdifatah.site",
    description: "My personal portfolio website showcasing my skills, projects, and experience.",
    iconUrl: "https://img.icons8.com/color/96/portfolio.png",
    theme: "bg-gradient-to-r from-blue-400 to-blue-600",
    link: "https://abdifatah.site",
  },
  {
    name: "Digital Boosthrg",
    description: "A digital marketing agency platform offering online services, resources, and advanced analytics for clients.",
    iconUrl: "src/assets/icons/digital boost logo.ico",
    theme: "bg-gradient-to-r from-green-400 to-green-600",
    link: "https://digitalboosthrg.online",
  },
  {
    name: "Sign Language AI Notepad",
    description: "A Notepad app with built-in AI that recognizes sign language and translates it into English.",
    iconUrl: "https://img.icons8.com/color/96/notepad.png",
    theme: "bg-gradient-to-r from-purple-400 to-purple-600",
    link: "https://github.com/abdifatah-com/AI-Powered-Notepad-with-Hand-Gesture-Recognition-",
  },
  {
    name: "Space Trip Agency",
    description: "A small system built with PHP for managing space trip bookings and agency operations.",
    iconUrl: "https://img.icons8.com/color/96/rocket--v1.png",
    theme: "bg-gradient-to-r from-pink-400 to-pink-600",
    link: "https://github.com/abdifatah-com/space-trip-management",
  },
  {
    name: "Advanced E-commerce Platform",
    description: "A scalable e-commerce platform with real-time inventory, payment integration, and user analytics.",
    iconUrl: "https://img.icons8.com/color/96/shopping-cart.png",
    theme: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    link: "#",
  },
  {
    name: "AI-Powered Chatbot",
    description: "A conversational AI chatbot for customer support, integrated with NLP and sentiment analysis.",
    iconUrl: "https://img.icons8.com/color/96/chatbot.png",
    theme: "bg-gradient-to-r from-indigo-400 to-indigo-600",
    link: "https://github.com/abdifatah-com/flutter-chat-app",
  },
  {
    name: "Task Management Dashboard",
    description: "A modern dashboard for managing tasks, deadlines, and team collaboration with real-time updates.",
    iconUrl: "https://img.icons8.com/color/96/task.png",
    theme: "bg-gradient-to-r from-teal-400 to-teal-600",
    link: "#",
  },
  {
    name: "Robot Automation System",
    description: "A system for automating repetitive tasks using robotic process automation (RPA) techniques.",
    iconUrl: "https://img.icons8.com/color/96/robot-2.png",
    theme: "bg-gradient-to-r from-gray-400 to-gray-600",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {myProjects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;

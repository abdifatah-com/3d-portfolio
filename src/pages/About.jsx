import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  // Updated experiences data
  const experiences = [
    {
      title: "Founder",
      company_name: "Digital Boost Hargeisa",
      icon: "src/assets/icons/Digital Boost logo.ico",
      iconBg: "#4B0082",
      date: "Jan 2024 - Present",
      points: [
        "Founded and manage Digital Boost, a full-time digital marketing agency in Hargeisa.",
        "Lead client projects, social media strategy, branding, and performance marketing.",
      ],
    },
    {
      title: "Educational Content Creator",
      company_name: "TikTok",
      icon: "src/assets/icons/tiktok.avif",
      iconBg: "#000000",
      date: "Dec 2023 - Present",
      points: [
        "Produce short-form educational videos on tech, marketing, and personal growth.",
        "Grew an engaged following using value-driven content strategy.",
      ],
    },
    {
      title: "Chief Executive Officer",
      company_name: "Anime State",
      icon: "src/assets/icons/anime.ico",
      iconBg: "#FF4500",
      date: "Apr 2023 - Present",
      points: [
        "Founded Hargeisa’s first anime-focused store and content brand.",
        "Manage anime merchandise, online campaigns, and community events.",
      ],
    },
    {
      title: "Sales and Marketing Specialist",
      company_name: "Winter Gloves (Canada)",
      icon: "src/assets/icons/winter gloves.ico",
      iconBg: "#00BFFF",
      date: "Sep 2024 – Feb 2025",
      points: [
        "Worked remotely to boost Canadian winter gear sales.",
        "Designed seasonal marketing campaigns targeting cold-weather markets.",
      ],
    },
    {
      title: "Marketing Trainee",
      company_name: "Coursera",
      icon: "src/assets/icons/coursera.png",
      iconBg: "#0056D2",
      date: "Jul 2024 – Jan 2025",
      points: [
        "Completed digital marketing training through Coursera.",
        "Worked on real-world projects focusing on content, SEO, and analytics.",
      ],
    },
    {
      title: "Marketing Assistant (Intern)",
      company_name: "Telesom",
      icon: "src/assets/icons/telesom.ico",
      iconBg: "#9ACD32",
      date: "Jul 2024 – Aug 2024",
      points: [
        "Assisted Telesom’s marketing team with campaign planning and execution.",
        "Supported digital promotion and offline event coordination.",
      ],
    },
  ];

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Abdifatah
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I’m Abdifatah Faisal Yusuf, a digital marketing specialist and front-end developer
          passionate about building websites, brands, and results. I love combining design,
          tech, and strategy to bring ideas to life.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: "#fff" }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;

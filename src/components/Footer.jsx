import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  const customSocialLinks = [
    {
      name: "GitHub",
      link: "https://github.com/abdifatah-com",
      iconUrl: "src/assets/icons/github.svg",
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/abdifatah-faisal",
      iconUrl: "src/assets/icons/linkedin.svg",
    },
    {
      name: "contact",
      link: "+252636472317",
      iconUrl: "src/assets/icons/contact.svg",
    },
     {
      name: "Instagram",
      link: "https://www.instagram.com/abdifatah__faisal/",
      iconUrl: "src/assets/icons/instagram.svg",
    },
  ];

  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2025 <strong>Abdifatah Faisal</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {customSocialLinks.map((link) => (
            <a key={link.name} href={link.link} target='_blank' rel='noopener noreferrer'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

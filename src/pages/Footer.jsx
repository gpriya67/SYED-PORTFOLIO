import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const footerIcon = [
    { id: 1, icon: <img src="/assets/insta (2).svg" alt="insta" /> },
    { id: 2, icon: <img src="/assets/facebook (2).svg" alt="facebook" /> },
    { id: 3, icon: <img src="/assets/whatapp (2).svg" alt="whatapp" /> },
    { id: 4, icon: <img src="/assets/linked (2).svg" alt="linked" /> },
    { id: 5, icon: <img src="/assets/pinterest.svg" alt="pinterest" /> },
  ];

  return (
    <div className="flex justify-center items-center flex-col px-4 md:px-10">
      <footer className="relative w-full bg-[#05050F] overflow-hidden rounded-3xl">
        <div className="absolute w-full top-0 left-0">
          <img
            src="/assets/foter.svg"
            className="rounded-3xl w-full py-4"
            alt="curve"
          />
        </div>

        <div className="relative max-w-7xl mx-auto rounded-3xl py-5">
          <h1
            className="absolute inset-0 flex justify-center items-center 
            text-[70px] sm:text-[100px] md:text-[160px] 
            font-extrabold text-emerald-900/30 select-none pointer-events-none"
          >
            <img src="/assets/footer.svg"  alt="footer"/>
          </h1>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-14 text-white mt-24 px-4 md:px-5">
            <div className="relative flex flex-col items-center md:items-start">
              <div className="w-[77px] h-[77px] flex items-center justify-center md:absolute md:left-0">
                <img src="/assets/d-icon.svg"  alt="icon"/>
              </div>

              <p
                className="mt-6 md:absolute md:-left-20 md:top-20 
                text-center md:text-left text-[18px] font-hagrid"
              >
                Let’s make the <span className="text-primary">Impact!</span>
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <ul className="space-y-1 text-center md:text-left">
                <li className="cursor-pointer font-hagrid text-[20px] md:text-[22px] text-primary">
                  <Link to="/">Home</Link>
                </li>
                <li className="cursor-pointer font-hagrid text-[20px] md:text-[22px]">
                  <Link to="about">About</Link>
                </li>
                <li className="cursor-pointer font-hagrid text-[20px] md:text-[22px]">
                  <Link to="testimonals">Testimonials</Link>
                </li>
                <li className="cursor-pointer font-hagrid text-[20px] md:text-[22px]">
                  <Link to="contact">Contact Us</Link>
                </li>
              </ul>

              <div className="mt-6 text-center md:text-left">
                <h3 className="text-[20px] md:text-[22px] text-primary font-hagrid">
                  For Enquiry
                </h3>
                <p>
                  <a
                    href="tel:+918608836033"
                    className="text-white text-[18px] md:text-[22px] hover:text-primary transition"
                  >
                    +91 86088 36033
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:imsyedirfan00@gmail.com"
                    className="text-white text-[18px] md:text-[22px] hover:text-primary transition"
                  >
                    imsyedirfan00@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <h3 className="text-[20px] md:text-[22px] font-hagrid mb-4">
                Follow me on
              </h3>
              <div className="flex gap-2">
                {footerIcon.map((itm, i) => (
                  <div key={i} className="w-9 h-9 hover:scale-110 transition">
                    {itm.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-400/20 mt-10">
          <div
            className="max-w-7xl mx-auto px-4 md:px-10 py-6 
            flex flex-col md:flex-row gap-4 md:gap-0 
            justify-between text-[14px] md:text-[16px] text-white"
          >
            <span className="text-center md:text-left">
              <span className="text-primary">Copyright © </span>
              designer syed irfan. All rights reserved.
            </span>

            <span className="flex justify-center md:justify-end gap-1 items-center">
              Designed with
              <div className=" w-3 h-3 mt-1">
                <img
                  src="/assets/BRAND SPARK HEARD (1).svg"
                  alt="brand"
                  className=" w-full h-auto object-cover"
                />
              </div>
              <a
                href="https://brandspark.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Brand Spark
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

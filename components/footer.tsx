import Link from "next/link";
import React from "react";
import MagicButton from "./ui/magic-button";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div></div>
      <div className="w-full absolute left-0 -bottom-72">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[43vw] text-white leading-6">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <Link href="mailto:huseyn.cavid.dev@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>

      <div className="flex mt-16  md:flex-row flex-col items-center justify-between gap-4">
        <p className="md:text-base text-sm md:font-normal font-light text-white-200 tracking-wide ">
          &copy; {new Date().getFullYear()} Huseyn Cavid. All rights reserved.
        </p>

        <div className="flex items-center md:gap-3 gap-6 ">
          {socialMedia?.map((profile) => (
            <Link
              key={profile.id}
              href={"/"}
              className="w-10 h-10 cursor-pointer flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-all duration-200 hover:bg-gradient-custom hover:border-transparent transform hover:translate-y-[-2px]"
            >
              <img src={profile.img} alt={profile.id} width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

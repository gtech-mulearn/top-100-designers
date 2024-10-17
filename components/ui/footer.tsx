import React from "react";
import { FaDiscord } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import Frame from "./frame";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primaryBg flex flex-col justify-center items-center p-8 pb-0">
      <div className="capitalize flex gap-4 text-white pb-12">
        {" "}
        <span className="text-xl">find us on</span>{" "}
        <span className="flex">
          <Link href={""}>
            <FaDiscord className="text-2xl mx-2" />
          </Link>
          <Link
            href={
              "https://www.instagram.com/mulearn.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            }
          >
            {" "}
            <FaInstagram className="text-2xl mx-2" />
          </Link>
          <Link href={""}>
            <FaFacebookF className="text-2xl mx-2" />
          </Link>
          <Link href={""}>
            <FaXTwitter className="text-2xl mx-2" />
          </Link>

          <Link
            href={
              "https://www.instagram.com/mulearn.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            }
          >
            <AiOutlineYoutube className="text-2xl mx-2" />
          </Link>
        </span>
      </div>
      <Frame>
        <div className="bg-black py-12 px-24 max-sm:px-12 max-sm:py-8">
          <Image
            draggable={false}
            src={"/footer.png"}
            alt="footer image"
            height={500}
            width={500}
          ></Image>
        </div>
      </Frame>
    </div>
  );
};

export default Footer;

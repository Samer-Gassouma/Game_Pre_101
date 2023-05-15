import Image from "next/image";
import Link from "next/link";
import logo from "../../images/logos/logo1.png";


import {  links } from "./data";
import Tilt from "react-parallax-tilt";

const Footer = () => {
  return (
    <footer className="mt-32 footer-bg text-qiskit-white flex flex-col gap-6 relative">
     
      <div className="flex flex-col items-center lg:items-start lg:flex-row">
        <div className="cursor-pointer -mt-16 order-first lg:order-last lg:ml-auto">
          <Tilt>
            <Image src={logo} alt="Qiskit Fall Fest Algiers" width={250} height={250} />
          </Tilt>
        </div>
        <div className="pt-14 pl-4 pr-4 lg:pl-11 lg:pr-0 2xl:pl-16">
          <div className="flex flex-col gap-6">
           

            <div className="flex flex-col lg:flex-row gap-12">
           

              <div className="hidden lg:flex gap-9 flex-1 justify-between">
                {links.map((link, idx1) => {
                  return (
                    <ul key={idx1}>
                      <li className="font-semibold mb-6">{link.linkName}</li>
                      <div className="flex flex-col gap-6">
                        {link.content.map((cont, idx2) => {
                          return (
                            <Link href={cont.redirect} key={idx1 * idx2 + 1}>
                              <li className="text-[0.9375rem] hover:text-qiskit-yellow transition-all duration-500 2xl:text-xl cursor-pointer">
                                {cont.name}
                              </li>
                            </Link>
                          );
                        })}
                      </div>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center px-4">
        <p className="text-[0.9375rem] pb-2 text-center">
          Copyright © 2023 CyberStorm
        </p>
      </div>

      
    </footer>
  );
};

export default Footer;
 
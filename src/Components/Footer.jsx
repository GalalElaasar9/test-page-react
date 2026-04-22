import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container lg:container_lg xl:container text-white" style={{ padding:'50px 0' }}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6 md:text-center lg:text-left">
          <div className="flex items-center md:justify-center lg:justify-start gap-3" style={{ marginBottom:"20px" }}>
            <img src={logo} alt="logo" className="h-[100px] w-[100px] object-contain"/>
              <h2 className="text-xl font-bold">
                4 SEASONS
              </h2>
            </div>
            <p className="text-gray-400 uppercase text-[20px] font-light opacity-90">
              DO YOU NEED OUR HELP
            </p>
            <h3 className="text-3xl lg:text-4xl font-bold mt-2 leading-snug">
              In Your Next{" "}
              <span className="text-[#9D1A10]">
                Event?
              </span>
            </h3>
          </div>

          <div className="lg:col-span-6">
            {/* Grid داخلي */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Company */}
              <div className="company">
                <h4 className="font-bold text-lg lg:text-[14px] xl:text-lg" style={{ marginBottom:"10px" }}>
                  Company
                </h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="hover:text-white transition cursor-pointer" style={{ marginBottom:"5px" }}>
                    <Link to="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="hover:text-white transition cursor-pointer" style={{ marginBottom:"5px" }}>
                    <Link to="/services">
                      Our Services
                    </Link>
                  </li>
                  <li className="hover:text-white transition cursor-pointer" style={{ marginBottom:"5px" }}>
                    <Link to="/projects">
                      Our Projects
                    </Link>
                  </li>
                  <li className="hover:text-white transition cursor-pointer" style={{ marginBottom:"5px" }}>
                    <Link to="/certifications">
                      Certifications
                    </Link>
                  </li>
                  <li className="hover:text-white transition cursor-pointer" style={{ marginBottom:"5px" }}>
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="provide">
                <h4 className="font-bold text-lg lg:text-[14px] xl:text-lg" style={{ marginBottom:"10px" }}>
                  We Provide
                </h4>

                <ul className="space-y-2 text-gray-400">
                  <li style={{ marginBottom:"5px" }}>Camp Services</li>
                  <li style={{ marginBottom:"5px" }}>Logistics Services</li>
                  <li style={{ marginBottom:"5px" }}>waste management</li>
                  <li style={{ marginBottom:"5px" }}>Transportation</li>
                  <li style={{ marginBottom:"5px" }}>General Maintenance</li>
                  <li style={{ marginBottom:"5px" }}>Pest Control</li>
                </ul>
              </div>

              {/* Contact */}
              <div className="contact">
                <h4 className="font-bold text-lg lg:text-[14px] xl:text-lg" style={{ marginBottom:"10px" }}>
                  Contact Informations
                </h4>
                  <ul className="space-y-2 text-gray-400">
                    <li style={{ marginBottom:"5px" }}>
                      Iraq - Baghdad - Al - Arasat/
                      <br />
                      Block929, St11
                    </li>
                    <li style={{ marginBottom:"5px" }}>
                      Iraq - Basrah, Basrah sport
                      <br />
                      city street
                    </li>
                    <li style={{ marginBottom:"5px" }}>
                      <Link to="mailto:info@4seasons-iraq.com">
                        info@4seasons-iraq.com
                      </Link>
                    </li>
                    <li style={{ marginBottom:"5px" }}>
                      <Link to="tel:+9647827777893">
                        +964 782 777 7893
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between" style={{ paddingTop:"20px" }}>
          <p className="copyRight text-gray-400 text-sm">&copy; {new Date().getFullYear()} 4 Seasons. All rights reserved.</p>
          {/* Social */}
          <div className="flex items-center gap-4 text-gray-400">
            <FaXTwitter className="cursor-pointer hover:text-white transition" />
            <FaYoutube className="cursor-pointer hover:text-white transition" />
            <FaFacebookF className="cursor-pointer hover:text-white transition" />
            <FaInstagram className="cursor-pointer hover:text-white transition" />
          </div>
        </div>
    </footer>
  );
}


/*

    <div className="bg-black text-white py-10">
      <div className="container">
      </div>
    </div>
*/
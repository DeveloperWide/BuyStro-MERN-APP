import { Link } from "react-router";
import logo from "../../public/BuyStro.png";

const Footer = () => {
  return (
    <div>
      {/* TODO: using grid can be a better option */}
      <div className="flex py-4">
        <div className="brand w-[30%]">
          <h2 className="flex pb-4 px-2">
            <img src={logo} alt="Brand Logo" className="h-10" />
            <span className="self-end text-[#EE3372] text-2xl">uyStro</span>
          </h2>

          <h2 className="px-2 py-3 text-xl font-bold">About us.</h2>
          <p className="px-2 pb-3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <section className="services w-[30%]">
          <h2 className="text-xl font-bold py-2">Services</h2>
          <ul className="list-disc pl-10 ">
            <li>
              <Link>Planning</Link>
            </li>
            <li>
              <Link>Research</Link>
            </li>
            <li>
              <Link>Consulting</Link>
            </li>
            <li>
              <Link>Analysis</Link>
            </li>
            <li>
              <Link>User Testing</Link>
            </li>
          </ul>
        </section>
        <section className="company w-[30%]">
          <h2 className="text-xl font-bold py-2">Company</h2>
          <ul className="list-disc pl-10 ">
            <li>
              <Link>Who we are</Link>
            </li>
            <li>
              <Link>Our Services</Link>
            </li>
            <li>
              <Link>Our Clients</Link>
            </li>
            <li>
              <Link>Pricing</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
        </section>
        <section className="contact w-[30%]">
          <h2 className="text-xl font-bold py-2">Contact us.</h2>
          <p className="pl-10 pb-3">
            <b>Call :</b>
            <br />
            <span className="text-gray-600">+913984589349</span>
          </p>
          <p className="pl-10">
            <b>Email :</b>
            <br />
            <span className="text-gray-600">user@example.com</span>
          </p>
          <hr className="w-14 h-4 bg-teal-800 text-teal-800 ms-12 my-3" />
        </section>
        <div className="follow_us"></div>
      </div>
      <div className="bottom_links bg-[#11161e] h-20 py-4 px-3 md:px-10 w-full flex flex-col md:flex-row items-center justify-between text-white">
        <div className="pages flex ml-3 gap-5 h-[50%]">
          <Link>Privacy Policy</Link>
          <hr className="h-full w-0.5 text-[#df361c] bg-[#df361c] rounded-[50%]" />
          <Link>Our History</Link>
          <hr className="h-full w-0.5 text-[#df361c] bg-[#df361c] rounded-[50%]" />
          <Link>What we do</Link>
        </div>
        <p className="py-2">
          &copy; 2026 BuyStro.{" "}
          <span className="hidden md:inline-block">
            All images are demo purposes only.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;

import { Link } from "react-router";
import logo from "/BuyStro.png";

const Footer = () => {
  return (
    <footer className="bg-[#f4f4f5] text-gray-700">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="BuyStro Logo" className="h-10" />
            <span className="text-2xl font-bold text-[#EE3372]">BuyStro</span>
          </div>

          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            We help businesses build better digital experiences through
            strategy, design, and technology.
          </p>
        </div>

        {/* Services */}
        <div className="hidden md:block">
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Planning",
              "Research",
              "Consulting",
              "Analysis",
              "User Testing",
            ].map((item) => (
              <li key={item}>
                <Link className="hover:text-[#EE3372] transition">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Who we are",
              "Our Services",
              "Our Clients",
              "Pricing",
              "Contact Us",
            ].map((item) => (
              <li key={item}>
                <Link className="hover:text-[#EE3372] transition">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <p className="text-sm mb-3">
            <span className="font-medium">Call</span>
            <br />
            <span className="text-gray-600">+91 39845 89349</span>
          </p>

          <p className="text-sm">
            <span className="font-medium">Email</span>
            <br />
            <span className="text-gray-600">user@example.com</span>
          </p>

          <div className="mt-4 h-1 w-12 bg-[#EE3372] rounded"></div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#11161e] text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="hidden md:flex gap-6 text-sm">
            <Link className="hover:text-white transition">Privacy Policy</Link>
            <Link className="hover:text-white transition">Our History</Link>
            <Link className="hover:text-white transition">What We Do</Link>
          </div>

          <p className="text-xl md:text-sm text-center">
            © 2026 BuyStro.{" "}
            <span className="inline">
              All images are for demo purposes only.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

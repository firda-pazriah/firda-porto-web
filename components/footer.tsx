import { social } from "@/config/social";
import { navigation } from "../config/navigation";
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <section
      id="footer"
      className="flex flex-col gap-6 w-full px-8 md:py-32 md:px-24 md:items-center"
    >
      <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
        <div className="flex items-center md:justify-center">
          <ul className="flex flex-col md:items-center gap-4 lg:px-8 md:flex-row">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground"
              >
                {item.name}
              </a>
            ))}
          </ul>
        </div>
        <div className="flex items-start justify-center md:items-center">
          <ul className="flex gap-4 w-fit">
            {social.map((nav) => (
              <li key={nav.name}>
                <a href={nav.url} className="text-indigo-400">
                  <nav.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="flex items-center gap-2 text-muted-foreground">
        <FaCopyright /> 2026 Firda Pazriah. All right reserved
      </p>
    </section>
  );
}

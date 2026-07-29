import { social } from "@/config/social";
import { navigation } from "../config/navigation";
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <section
      id="footer"
      className="flex flex-col gap-6 justify-center items-center py-32"
    >
      <ul className="flex gap-4 w-fit">
        {navigation.map((nav) => (
          <li key={nav.name}>
            <a href={nav.href} className="text-muted-foreground font-medium">
              {nav.name}
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex gap-4 w-fit">
        {social.map((nav) => (
          <li key={nav.name}>
            <a href={nav.url} className="text-indigo-400">
              <nav.icon />
            </a>
          </li>
        ))}
      </ul>
      <p className="flex items-center gap-2 text-muted-foreground">
        <FaCopyright /> 2026 Firda Pazriah. All right reserved
      </p>
    </section>
  );
}

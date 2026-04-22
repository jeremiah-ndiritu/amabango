import { Home } from "lucide-react";
import { Link, NavLink } from "react-router-dom";


const linkStyle = "px-4 py-2 rounded-lg transition hover:bg-primary-muted";

export default function ServicesHeader() {
  return (
    <div className="border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl gap-4 px-4 py-3 text-sm">
        <Link to="/"><Home /></Link>
        <NavLink
          to="/services"
          end
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? "bg-primary text-black" : ""}`
          }
        >
          Overview
        </NavLink>

        <NavLink
          to="/services/webdev"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? "bg-primary text-black" : ""}`
          }
        >
          Web Dev
        </NavLink>

        <NavLink
          to="/services/autocad"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? "bg-primary text-black" : ""}`
          }
        >
          AutoCAD
        </NavLink>

        <NavLink
          to="/services/it"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? "bg-primary text-black" : ""}`
          }
        >
          IT Services
        </NavLink>
      </div>
    </div>
  );
}

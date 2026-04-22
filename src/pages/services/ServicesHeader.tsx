import { Home } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const baseLink =
  "flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition";

const activeStyle = "bg-primary text-black";
const inactiveStyle = "hover:bg-primary-muted";

const navItems = [
  { label: "Overview", path: "/services", end: true },
  { label: "Web Dev", path: "/services/webdev" },
  { label: "AutoCAD", path: "/services/autocad" },
  { label: "IT Services", path: "/services/it" },
];

export default function ServicesHeader() {
  return (
    <div className="border-b border-border bg-surface/80 backdrop-blur-md sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 py-2">
        {/* Scroll container */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {/* Home */}
          <Link
            to="/"
            className="flex items-center justify-center min-w-10 h-10 rounded-lg hover:bg-primary-muted transition"
          >
            <Home size={18} />
          </Link>

          {/* Nav Links */}
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

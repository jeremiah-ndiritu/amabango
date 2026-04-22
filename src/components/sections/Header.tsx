import {useState} from 'react'
import ThemeToggle from "@/components/UI/ThemeToggle";
import sdLogo from "@images/logos/amabango-logo-img-v1.png";
import { Link } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border bg-surface/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src={sdLogo}
            alt="Amabango Designs"
            className="h-10 w-10 rounded-xl object-cover border border-border"
          />
          <h2 className="text-lg font-semibold text-text-strong">
            Amabango Designs
          </h2>
        </div>

        {/* Nav */}
        <nav>
          <ul className="flex items-center gap-6 text-sm">
            {/* Theme toggle */}
            <li>
              <ThemeToggle />
            </li>

            {/* Services dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              {/* Main link */}
              <Link to="/services" className="hover:text-primary transition">
                Services
              </Link>

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-card shadow-lg p-2">
                  <Link
                    to="/services/autocad"
                    className="block rounded-lg px-3 py-2 hover:bg-primary-muted transition"
                  >
                    AutoCAD Services
                  </Link>
                  <Link
                    to="/services/webdev"
                    className="block rounded-lg px-3 py-2 hover:bg-primary-muted transition"
                  >
                    Web Development
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link to="/about" className="hover:text-primary transition">
                About us
              </Link>
            </li>

            <li>
              <Link to="/contacts" className="hover:text-primary transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

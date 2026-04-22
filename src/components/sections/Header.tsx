import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "@/components/UI/ThemeToggle";
import sdLogo from "@images/logos/amabango-logo-img-v1.png";

const mv: React.AriaAttributes["aria-expanded"] = String(false) as unknown as
  | "false"
  | "true";
console.log("mv :>> ", mv);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname.startsWith(path);

  const handleNavClick = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="border-b border-border bg-surface/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
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

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <ThemeToggle />
            </li>

            {/* Services */}
            <li className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                className={`flex items-center gap-1 transition ${
                  isActive("/services") ? "text-primary" : "hover:text-primary"
                }`}
              >
                Services
                <motion.span
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center"
                >
                  <ChevronDown size={16} />
                </motion.span>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    id="services-menu"
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-card shadow-lg p-2"
                  >
                    <Link
                      to="/services/autocad"
                      onClick={handleNavClick}
                      className="block rounded-lg px-3 py-2 hover:bg-primary-muted transition"
                    >
                      AutoCAD Services
                    </Link>
                    <Link
                      to="/services/webdev"
                      onClick={handleNavClick}
                      className="block rounded-lg px-3 py-2 hover:bg-primary-muted transition"
                    >
                      Web Development
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link
                to="/about"
                className={`transition ${
                  isActive("/about") ? "text-primary" : "hover:text-primary"
                }`}
              >
                About us
              </Link>
            </li>

            <li>
              <Link
                to="/contacts"
                className={`transition ${
                  isActive("/contacts") ? "text-primary" : "hover:text-primary"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="p-1"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-border bg-surface px-4"
          >
            <div className="py-4 space-y-3">
              {/* Services */}
              <div>
                <button
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className={`flex w-full items-center justify-between py-2 transition ${
                    isActive("/services")
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                >
                  Services
                  <motion.span
                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 space-y-2 overflow-hidden"
                    >
                      <Link
                        to="/services/autocad"
                        onClick={handleNavClick}
                        className="block py-1 hover:text-primary transition"
                      >
                        AutoCAD Services
                      </Link>
                      <Link
                        to="/services/webdev"
                        onClick={handleNavClick}
                        className="block py-1 hover:text-primary transition"
                      >
                        Web Development
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/about"
                onClick={handleNavClick}
                className={`block py-2 transition ${
                  isActive("/about") ? "text-primary" : "hover:text-primary"
                }`}
              >
                About us
              </Link>

              <Link
                to="/contacts"
                onClick={handleNavClick}
                className={`block py-2 transition ${
                  isActive("/contacts") ? "text-primary" : "hover:text-primary"
                }`}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import { Home, Layers, FolderOpen, Mail, ArrowRight, MessageSquare } from "lucide-react";

const LIME   = "#bdf522";
const PURPLE = "#008BFF";

// const DOT_PATTERN = {
//   backgroundColor: "#e5e5f7",
//   backgroundImage: `radial-gradient(#444cf7 0.5px, transparent 0.5px), radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)`,
//   backgroundSize: "20px 20px",
//   backgroundPosition: "0 0, 10px 10px",
// };

const navItems = [
  { label: "Accueil",      href: "#accueil",      icon: Home },
  { label: "Projets",      href: "#projets",      icon: Layers },
  { label: "Processus",    href: "#processus",    icon: FolderOpen },
  { label: "Témoignages",  href: "#temoignages",  icon: MessageSquare },
  { label: "Contact",      href: "#contact",      icon: Mail },
];

export default function Header() {
  return (
    <header className="relative z-20 px-8 md:px-16 lg:px-32 py-4">
      <nav className="flex justify-between items-center max-w-7xl mx-auto border-2 border-black bg-white px-6 py-3">

        {/* ── Logo ── */}
        <div className="flex items-center gap-2.5">
          {/* Carré logo avec offset shadow */}
          <div className="relative w-fit">
            <div
              className="absolute top-1 left-1 w-8 h-8 border-2 border-black"
              style={{ backgroundColor: LIME }}
            />
            <div
              className="relative w-8 h-8 border-2 border-black flex items-center justify-center"
              style={{ backgroundColor: PURPLE }}
            >
              <span className="text-white font-black text-sm">C</span>
            </div>
          </div>
          <p className="text-lg font-black text-black tracking-tight ml-1">Conique</p>
        </div>

        {/* ── Nav links ── */}
        <div className="hidden md:flex items-center">
          {navItems.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="relative flex items-center gap-2 px-4 py-2.5 text-zinc-600 text-sm font-medium transition-colors duration-150 group hover:text-black"
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "transparent";
                el.style.color = "#000";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "transparent";
                el.style.color = "";
              }}
            >
              <Icon
                size={13}
                className="text-zinc-400 group-hover:text-black transition-colors duration-150"
              />
              {label}
            </a>
          ))}
        </div>

        {/* ── CTA ── */}
        <button
          className="group flex items-center gap-2 px-5 py-2.5 text-white text-sm font-bold border-2 border-black transition-all duration-200"
          style={{ backgroundColor: PURPLE }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = "transparent";
            // el.style.backgroundColor = LIME;
            el.style.color = "#000";
            el.style.borderColor = "#000";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = PURPLE;
            el.style.color = "#fff";
            el.style.borderColor = "#000";
          }}
        >
          Démarrer un projet
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>

      </nav>
    </header>
  );
}
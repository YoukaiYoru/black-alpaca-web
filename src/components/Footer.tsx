import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gray-900 text-gray-300 py-10 px-6 md:px-12 mt-16 border-t border-gray-700"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Nombre */}
        <div>
          <h2 className="text-xl font-bold text-white">CyberSecureConf 2025</h2>
          <p className="mt-2 text-sm text-gray-400">
            La conferencia líder en ciberseguridad en América Latina. Únete a
            expertos, investigadores y líderes del sector.
          </p>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="text-md font-semibold text-white mb-2">Enlaces</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#agenda" className="hover:underline">
                Agenda
              </a>
            </li>
            <li>
              <a href="#ponentes" className="hover:underline">
                Ponentes
              </a>
            </li>
            <li>
              <a href="#registro" className="hover:underline">
                Registro
              </a>
            </li>
            <li>
              <a href="#patrocinadores" className="hover:underline">
                Patrocinadores
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-md font-semibold text-white mb-2">Contacto</h3>
          <ul className="text-sm space-y-1">
            <li>
              Email:{" "}
              <a
                href="mailto:info@cybersecureconf.com"
                className="hover:underline"
              >
                info@cybersecureconf.com
              </a>
            </li>
            <li>Teléfono: +51 999 888 777</li>
            <li>Ubicación: Lima, Perú</li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} CyberSecureConf. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}

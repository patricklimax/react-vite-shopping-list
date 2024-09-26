import { LayoutListIcon } from "lucide-react";
import { Logotipo } from "./logotipo";

export const Header = () => {
  return (
    <header className="px-4 h-16 flex items-center justify-between bg-primary text-primary-foreground rounded-md">
      <Logotipo />
      <nav>
        <ul>
          <li>
            <a
              href="https://patricklimax.vercel.app/"
              className="flex items-center gap-1 text-sm"
            >
              <LayoutListIcon strokeWidth={2} size={22} color="#94A3B8" />
              <p className="font-medium uppercase">Mais</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};


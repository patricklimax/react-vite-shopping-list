import { CheckCheckIcon, ListPlusIcon } from "lucide-react";
import { Button } from "./ui/button";

type NoProductProps = {
  onClick: () => void;
};

export const NoProduct = ({ onClick }: NoProductProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 flex-1 ">
      <ListPlusIcon size={60} strokeWidth={2} className="text-slate-500" />
      <div className="text-center text-lg font-medium">
        <p>Você ainda não tem uma lista de compras.</p>
        <div className="mt-8">
          <p className="flex items-center gap-1">
            <CheckCheckIcon />
            Crie sua lista.
          </p>
          <p className="flex items-center gap-1">
            <CheckCheckIcon />
            Mantenha suas compras organizadas.
          </p>
        </div>
      </div>
      <div className="mt-20">
        <Button onClick={onClick}>Comece agora...</Button>
      </div>
    </div>
  );
};

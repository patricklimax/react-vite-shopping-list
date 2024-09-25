import { ShoppingCartIcon } from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
};

export const TitleApp = ({ title, subtitle }: Props) => {
  return (
    <h1 className="text-3xl flex items-center justify-center gap-1 uppercase font-semibold">
      <span>{title}</span>
      <span className="text-slate-600">{subtitle}</span>
      <span className="-mt-2 -ml-2 -rotate-12">
        <ShoppingCartIcon strokeWidth={2} size={40} />
      </span>
    </h1>
  );
};

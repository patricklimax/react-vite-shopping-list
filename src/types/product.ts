import { ReactNode } from "react";

export type Product = {
  id: string;
  name: string;
  isChecked: boolean;
  quantity: number;
  measure?: string;
  category?: string;
  check?: ReactNode;
  edit?: ReactNode;
  remove?: ReactNode;
};

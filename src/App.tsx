import { PlusIcon } from "lucide-react";
import { TitleApp } from "./components/title-app";
import { Button } from "./components/ui/button";
import { useState } from "react";
import { Input } from "./components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { measures } from "./data/measures";
import { categories } from "./data/categories";

function App() {
  const [showModalNewProduct, setShowModalNewProduct] = useState(true);

  //abre o modal para salvar um novo produto
  const openModalNewProduct = () => {
    setShowModalNewProduct(true);
  };

  const closeModalProduct = () => {
    setShowModalNewProduct(!showModalNewProduct);
  };
  return (
    <section className="flex-1 border px-2 relative">
      <div className="mt-4">
        <TitleApp title={"Lista de"} subtitle={"Compras"} />
      </div>
      <div className="absolute bottom-2 right-2">
        <Button
          size={"sm"}
          className="text-background"
          onClick={openModalNewProduct}
        >
          <PlusIcon size={18} strokeWidth={2} className="text-background" />
          <span className="hidden md:flex">Novo</span>
        </Button>
      </div>
      <div className="mt-4 absolute bottom-2  w-full">
        {showModalNewProduct && (
          <div className="bg-muted p-4 rounded-md">
            <h2 className="text-center text-lg uppercase font-semibold bg-primary text-secondary py-2 rounded-md">
              Salvar Produto
            </h2>
            <div className="my-4 flex gap-2 flex-col">
              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  className="flex-1"
                  placeholder="O que você deseja comprar..."
                />
                <Input type="number" className="w-20" placeholder="Qde" />
              </div>
              <div className="flex items-center gap-2">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {measures.map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                  {categories.map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <Button
                className="flex-1"
                variant={"outline"}
                onClick={closeModalProduct}
              >
                Cancelar
              </Button>
              <Button className="flex-1">Salvar</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;

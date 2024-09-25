import {
  CheckIcon,
  FilePenIcon,
  PlusIcon,
  SquareIcon,
  Trash2Icon,
} from "lucide-react";
import { TitleApp } from "./components/title-app";
import { Button } from "./components/ui/button";
import { FormEvent, useState } from "react";
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
import { Product } from "./types/product";
import { products } from "./data/products";

function App() {
  const [showModalNewProduct, setShowModalNewProduct] = useState(false);
  const [productsList, setProductsList] = useState<Product[]>(products);

  const [nameProduct, setNameProduct] = useState("");
  const [idProduct, setIdProduct] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [measure, setMeasure] = useState("");
  const [category, setCategory] = useState("");

  // limpa inputs
  const clearFields = () => {
    setNameProduct("");
    setIdProduct("");
    setQuantity(0);
    setMeasure("");
    setCategory("");
  };

  // adiciona um novo produto
  const saveNewProduct = (e: FormEvent) => {
    if (nameProduct === "") {
      alert("Obrigatório inserir um item.");
    } else {
      e.preventDefault();
      setProductsList(
        [
          ...productsList,
          {
            id: crypto.randomUUID(),
            name: nameProduct,
            isChecked: false,
            quantity,
            measure,
            category,
          },
        ].sort((a: Product, b: Product): 1 | -1 => {
          if (a.isChecked < b.isChecked) {
            return -1;
          } else {
            return 1;
          }
        })
      );
      clearFields();
    }
  };

  // marca item como no carrinho
  const productCart = (id: string) => {
    setProductsList(
      productsList
        .map((product) =>
          product.id === id
            ? { ...product, isChecked: !product.isChecked }
            : product
        )
        .sort((a: Product, b: Product): 1 | -1 => {
          if (a.isChecked < b.isChecked) {
            return -1;
          } else {
            return 1;
          }
        })
    );
    setShowModalNewProduct(false);
  };

  //abre o modal para salvar um novo produto
  const openModalNewProduct = () => {
    setShowModalNewProduct(true);
  };

  // fecha o modal
  const closeModalProduct = () => {
    setShowModalNewProduct(!showModalNewProduct);
  };

  return (
    <section className="flex-1 border px-2 relative">
      <div className="mt-4">
        <TitleApp title={"Lista de"} subtitle={"Compras"} />
      </div>
      <div className="my-4 h-[calc(100vh-14rem)] overflow-auto [&::-webkit-scrollbar]:hidden">
        <ul className="flex flex-col gap-4">
          {productsList.map((product) => (
            <li
              key={product.id}
              className="border p-2 flex items-center justify-between gap-2"
            >
              <div>
                {product.isChecked ? (
                  <Button
                    size={"icon"}
                    className="text-emerald-600"
                    onClick={() => productCart(product.id)}
                  >
                    <CheckIcon />
                  </Button>
                ) : (
                  <Button
                    size={"icon"}
                    className="text-emerald-600"
                    onClick={() => productCart(product.id)}
                  >
                    <SquareIcon />
                  </Button>
                )}
              </div>
              <div className="flex-1">
                <div>{product.name}</div>
                <div className="text-sm -mt-1 text-muted-foreground">
                  {product.quantity}
                </div>
              </div>
              <div>{product.category}</div>
              <div className="flex items-center gap-4 pl-4">
                <Button size={"icon"} className="text-yellow-400">
                  <FilePenIcon />
                </Button>
                <Button size={"icon"} className="text-red-400">
                  <Trash2Icon />
                </Button>
              </div>
            </li>
          ))}
        </ul>
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
            <div className="my-4">
              <div>
                <Input
                  required
                  id="name"
                  type="text"
                  placeholder="O que você deseja comprar..."
                  value={nameProduct}
                  onChange={(e) => setNameProduct(e.target.value)}
                />
              </div>

              <div>
                <Input
                  required
                  id="quantity"
                  type="number"
                  placeholder="Qde"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
              </div>
              <div className="flex items-center gap-2">
                <Select
                  name="measure"
                  defaultValue={measure}
                  onValueChange={(value: string) => setMeasure(value)}
                >
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
                <Select
                  name="category"
                  value={category}
                  onValueChange={(value: string) => setCategory(value)}
                >
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
              <div className="flex items-center gap-4 mt-8">
                <Button
                  className="flex-1"
                  variant={"outline"}
                  onClick={closeModalProduct}
                >
                  Cancelar
                </Button>
                <Button className="flex-1" onClick={saveNewProduct}>
                  Salvar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;

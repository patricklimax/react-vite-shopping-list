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
import { NoProduct } from "./components/no-product";

function App() {
  const [showModalNewProduct, setShowModalNewProduct] = useState(false);
  const [productsList, setProductsList] = useState<Product[]>(products);

  const [nameProduct, setNameProduct] = useState("");
  const [idProduct, setIdProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [measure, setMeasure] = useState("");
  const [category, setCategory] = useState("");

  const [editButton, setEditButton] = useState(false);

  // limpa inputs
  const clearFields = () => {
    setNameProduct("");
    setIdProduct("");
    setQuantity("");
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
      setShowModalNewProduct(false);
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

  //remove um produto da lista
  const removeProduct = (id: string) => {
    setProductsList(productsList.filter((product) => product.id !== id));
    setShowModalNewProduct(false);
  };

  //abre o modal para salvar um novo produto
  const openModalProduct = () => {
    setShowModalNewProduct(true);
    setEditButton(false);
  };

  // fecha o modal
  const closeModalProduct = () => {
    setShowModalNewProduct(false);
    clearFields();
  };

  //abrir modal de edição
  const openModalEdit = (id: string) => {
    setShowModalNewProduct(true);
    const product = productsList.find((product) => product.id === id);
    if (product) {
      setNameProduct(product.name);
      setIdProduct(product.id);
      setQuantity(product.quantity);
      setMeasure(product.measure);
      setCategory(product.category);
      setEditButton(true);
    }
  };

  // salva o item editado
  const editProduct = () => {
    const product = products.find((product) => product.id === idProduct);
    if (product) {
      product.name = nameProduct;
      product.quantity = quantity;
      product.measure = measure;
      product.category = category;
      setEditButton(false);
      setShowModalNewProduct(false);
    }
    setProductsList([...productsList]);
    clearFields();
  };

  return (
    <section className="flex-1 border px-2 relative">
      <div className="mt-4">
        <TitleApp title={"Lista de"} subtitle={"Compras"} />
      </div>

      {/* lista de produtos */}
      <div className="my-4 h-[calc(100vh-14rem)] overflow-auto [&::-webkit-scrollbar]:hidden">
        {/* modal Quantidade de produtos === 0 */}
        {productsList.length === 0 && (
          <div className="flex items-center justify-center">
            <NoProduct onClick={openModalProduct} />
          </div>
        )}

        <ul className="flex flex-col gap-4">
          {productsList
            .sort((a: Product, b: Product): 1 | -1 => {
              if (a.isChecked < b.isChecked) {
                return -1;
              } else {
                return 1;
              }
            })
            .map((product) => (
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
                  <div
                    className={[
                      product.isChecked
                        ? "line-through text-muted-foreground"
                        : "",
                    ].join(" ")}
                  >
                    {product.name}
                  </div>
                  <div className="text-sm -mt-1 text-muted-foreground">
                    {product.quantity} - {product.measure}(s)
                  </div>
                </div>
                <div>{product.category}</div>
                <div className="flex items-center gap-4 pl-4">
                  <Button
                    size={"icon"}
                    className="text-yellow-400"
                    onClick={() => openModalEdit(product.id)}
                  >
                    <FilePenIcon />
                  </Button>
                  <Button
                    size={"icon"}
                    className="text-red-400"
                    onClick={() => removeProduct(product.id)}
                  >
                    <Trash2Icon />
                  </Button>
                </div>
              </li>
            ))}
        </ul>
      </div>

      {/* botão adicionar produto */}
      {productsList.length > 0 && (
        <div className="absolute bottom-2 right-2 bg-red-600">
          <Button
            size={"sm"}
            className="text-background"
            onClick={openModalProduct}
          >
            <PlusIcon size={18} strokeWidth={2} className="text-background" />
            <span className="hidden md:flex">Novo</span>
          </Button>
        </div>
      )}

      {/* modal form adicionar produto */}
      {showModalNewProduct && (
        <div className="absolute w-screen h-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/45 flex items-center justify-center">
          <div className="bg-muted p-4 rounded-md w-11/12 md:w-1/2 mx-auto">
            <h2 className="text-center text-lg uppercase font-semibold bg-primary text-secondary py-2 rounded-md">
              {editButton ? "Editar Produto" : "Adicionar Produto"}
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
                  className="outline-none ring-none"
                />
              </div>

              <div className="mt-2">
                <Input
                  required
                  id="quantity"
                  type="number"
                  placeholder="Qde"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 mt-2">
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

                {editButton ? (
                  <Button className="flex-1" onClick={editProduct}>
                    Editar
                  </Button>
                ) : (
                  <Button className="flex-1" onClick={saveNewProduct}>
                    Salvar
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default App;

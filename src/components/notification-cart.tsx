type NotificationProps = {
  qdeProducts: number;
  qdeProductsCart: number;
};

export const NotificationCart = ({
  qdeProducts,
  qdeProductsCart,
}: NotificationProps) => {
  return (
    <div className="h-8 flex items-center justify-between bg-border px-2 rounded-md">
      <div className="flex items-center gap-1 text-sm font-medium">
        <span>Produtos na Lista</span>
        <span className="text-xs h-5 w-5 bg-card-foreground rounded-full text-card flex items-center justify-center">
          {qdeProducts}
        </span>
      </div>
      <div className="flex items-center gap-1 text-sm font-medium">
        <span>Produtos no Carrinho</span>
        <span className="text-xs h-5 w-fit px-2 bg-card-foreground rounded-full text-card flex items-center justify-center">
          {qdeProductsCart} de {qdeProducts}
        </span>
      </div>
    </div>
  );
};

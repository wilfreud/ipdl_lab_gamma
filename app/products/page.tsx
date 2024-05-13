export default async function Products() {
  const productLIst = [
    {
      name: "Product 1",
      price: 100,
      description: "This is a product description",
    },
    {
      name: "Product 2",
      price: 200,
      description: "This is a product description",
    },
    {
      name: "Product 3",
      price: 300,
      description: "This is a product description",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p className="text-2xl">This is the products page 🗿</p>
        <div>
          {productLIst.map((product) => {
            return (
              <ul key={Math.random() - Math.random() * 83}>
                {productLIst.map((product) => {
                  return (
                    <li key={Math.random() - Math.random() * 82}>
                      {product.name}
                      <span className="text-pink-800">(${product.price})</span>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
    </main>
  );
}

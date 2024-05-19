import { MdStar } from "react-icons/md";

function ProductDisplay(props) {
  const { product } = props;
  return (
    <section className="flex flex-col items-center xl:flex-row gap-4 p-3">
      <div className="max-w-[400px] flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
          <div className="">
            <div className="text-lg font-semibold">{product.price}€</div>
            <div className="text-lg">{product.ml}</div>
          </div>
          <p className="text-gray-700 mt-2">{product.description}</p>
        </div>
        <div className="flex flex-col gap-y-3 mb-4 max-w-[555px]">
          <button
            onClick={() => {
              addToCart(product.id);
            }}
            className="btn_dark_outline !rounded-none uppercase regular-14 tracking-widest"
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDisplay;

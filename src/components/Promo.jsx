import { usePromoContext } from "../contexts/PromoContext";

export default function Promo() {
  const { promoData, setPromoData } = usePromoContext();

  const { message } = promoData;

  const closePromo = () => {
    setPromoData({ message: "" });
  };
  if (!message) {
    return null;
  }

  return (
    <div className="relative bg-white text-red-600 py-4">
      <button
        onClick={closePromo}
        className="absolute top-2 right-2 text-black px-3 py-1 rounded-full text-xl font-bold hover:scale-110 cursor-pointer"
      >
        X
      </button>
      <div className="ms-marquee">
        <span className="ms-marquee-content text-lg font-bold px-4">
          {message} {message} {message}
        </span>
      </div>
    </div>
  );
}

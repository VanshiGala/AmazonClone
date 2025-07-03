import { Link } from "react-router-dom";

function ProductCardSection({ title, items, variant = "default" }) {
  const styleMap = {
    yellow: {
      bg: "bg-yellow-100",
      img: "h-24",
      title: "text-xl font-bold text-yellow-700",
      text: "text-sm text-gray-800",
    },
    blue: {
      bg: "bg-blue-100",
      img: "h-20",
      title: "text-lg font-semibold text-blue-800",
      text: "text-xs text-gray-700",
    },
    green: {
      bg: "bg-green-100",
      img: "h-28",
      title: "text-2xl font-extrabold text-green-800",
      text: "text-base text-gray-900",
    },
    default: {
      bg: "bg-gray-50",
      img: "h-24",
      title: "text-lg font-medium text-gray-900",
      text: "text-sm text-gray-800",
    },
  };
  const styles = styleMap[variant] || styleMap.default;

  return (
    <div className={`p-4 rounded shadow ${styles.bg}`}>
      <h3 className={`${styles.title} mb-4`}>{title}</h3>
      <div className="grid grid-cols-2 gap-2">
        {items.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="text-center hover:opacity-80 transition"
          >
            <div className="text-sm">
              <img
                src={item.img}
                alt={item.text}
                className={`w-full object-contain mb-1 ${styles.img}`}
              />
              <p className={`${styles.text}`}>{item.text}</p>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductCardSection;

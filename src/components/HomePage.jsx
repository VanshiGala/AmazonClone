import SlidingBanner from "../components/SlidingBanner";
import ProductCardSection from "../components/ProductCardSection";
import HorizontalOffer from "../components/HorizontalOffer";

function HomePage() {
  const homeProducts = [
    { img: "/watch.webp", alt: "Smart Watch" },
    { img: "/tv.avif", alt: "Android TV" },
    { img: "/speaker.webp", alt: "Bluetooth Speaker" },
    { img: "/projector.jpg", alt: "Projector" },
    { img: "/keyboard.webp", alt: "Keyboard" },
    { img: "/mouse.webp", alt: "Mouse" },
    { img: "/portronics.webp", alt: "Portronics" },
    { img: "/camera.webp", alt: "Camera" },
    { img: "/headphone.jpg", alt: "Headphone" },
    { img: "/laptopStand.jpg", alt: "Laptop Stand" },
  ];
  const homeImages = [
    { src: "/Banner1.webp", alt: "Home Banner 1" },
    { src: "/Banner2.webp", alt: "Home Banner 2" },
    { src: "/Banner3.jpg", alt: "Home Banner 3" },
  ];
  return (
    <div className="mt-4 ">
      <SlidingBanner images={homeImages} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <ProductCardSection
          title="Appliances for your home | Up to 55% off"
          items={[
            { img: "/ac.png", text: "Air conditioners", link: "/products/ac" },
            {
              img: "/fridge.webp",
              text: "Refrigerators",
              link: "/products/fridge",
            },
            {
              img: "/micro.jpg",
              text: "Microwave",
              link: "/products/microwave",
            },
            {
              img: "/wmachine.webp",
              text: "Washing Machine",
              link: "/products/washingmachine",
            },
          ]}
        />

        <ProductCardSection
          title="Revamp your home in style"
          items={[
            {
              img: "/cushion.webp",
              text: "Cushion covers",
              link: "/products/cushion",
            },
            {
              img: "/figurine.jpg",
              text: "Figurines",
              link: "/products/figurine",
            },
            {
              img: "/bedsheet.webp",
              text: "Bedsheets",
              link: "/products/bedsheet",
            },
            { img: "/lamp.webp", text: "Lamps", link: "/products/lamp" },
          ]}
        />
        <ProductCardSection
          title="Playstation 5 slim & Accessories | No Cost EMI*"
          items={[
            {
              img: "/ps5.jpg",
              text: "PS5 Slim Digital Edition",
              link: "/products/ps5",
            },
            {
              img: "/ps5Disc.jpg",
              text: "PS5 Slim Disc Edition",
              link: "/products/ps5Disc",
            },
            {
              img: "/ps5Dual.webp",
              text: "PS5 DualSense Wireless Controller",
              link: "/products/ps5Dual",
            },
            {
              img: "/ps5Fortnite.jpg",
              text: "PS5 Slim Fortnite digital edition",
              link: "/products/ps5Fortnite",
            },
          ]}
        />
        <ProductCardSection
          title="Under Rs.400 | Deals on Home improvement essentials"
          items={[
            {
              img: "/cleaningSupplies.png",
              text: "Cleaning Supplies",
              link: "/products/supplies",
            },
            {
              img: "/bathroomAccessories.jpg",
              text: "Bathroom Accessories",
              link: "/products/bathroomAccessories",
            },
            {
              img: "/homeTools.jpg",
              text: "Home Tools",
              link: "/products/homeTools",
            },
            {
              img: "/wallpaper.jpg",
              text: "Wallpapers",
              link: "/products/wallpaper",
            },
          ]}
        />
      </div>
      <HorizontalOffer
        title="Hot Deals on Electronics"
        link="#"
        products={homeProducts}
      />
    </div>
  );
}

export default HomePage;

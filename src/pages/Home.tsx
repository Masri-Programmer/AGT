import {
  HomeCarousel,
  Title,
  Card,
  product1,
  product2,
  ProductGrid,
  product3,
  ExclusiveSection,
  Brands,
  Banner,
  OrderSection,
} from "../imports";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="grid gap-4">
      <HomeCarousel />
      <div data-aos="fade-up">
        <Title txt={"Latest Deals"} />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-4 lg:gap-y-5 xl:gap-y-6 2xl:gap-y-8">
          <Card
            src={product1}
            title={"34 ViewFinity S65VC Curved WQHD Webcam Business Monitor"}
            details={`LS34C650VAEXXY -Wide workspace of 21:9 ratio and lifelike detail with
          Ultra WQHD resolution -Stay connected through video calls and free up
          desk space with built-in webcam and speakers`}
          />
          <Card
            title={"EVO Plus microSD Card 512GB"}
            src={product2}
            details={`MB-MC512KA/APC`}
          />
          <Card
            title={
              "HP ProBook 450 G9 Laptop-PC mit NVIDIA® GeForce® MX570 und 400-nits Display"
            }
            src={product3}
            details={`Everyday productivity. Safety, performance and longevity for your everyday work.
Windows 11 Pro Intel® Core™ i7 1255U 32GB RAM 1TB SSD 15.6" FHD NVIDIA® GeForce® MX570 (2GB)`}
          />
          <Card
            title={
              "HP ProBook 450 G9 Laptop-PC mit NVIDIA® GeForce® MX570 und 400-nits Display"
            }
            src={product3}
            details={`Everyday productivity. Safety, performance and longevity for your everyday work.
Windows 11 Pro Intel® Core™ i7 1255U 32GB RAM 1TB SSD 15.6" FHD NVIDIA® GeForce® MX570 (2GB)`}
          />
          <Card
            title={
              "HP ProBook 450 G9 Laptop-PC mit NVIDIA® GeForce® MX570 und 400-nits Display"
            }
            src={product3}
            details={`Everyday productivity. Safety, performance and longevity for your everyday work.
Windows 11 Pro Intel® Core™ i7 1255U 32GB RAM 1TB SSD 15.6" FHD NVIDIA® GeForce® MX570 (2GB)`}
          />
        </div>
      </div>
      <div data-aos="fade-up">
        {" "}
        <ExclusiveSection />
      </div>
      <div data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
        {" "}
        <Title txt={"Recommended Products"} />
        <ProductGrid />
      </div>
      <div data-aos="zoom-in-down" data-aos-anchor-placement="top-bottom">
        {" "}
        <Banner />
      </div>
      <div data-aos="flip-up" data-aos-anchor-placement="top-bottom">
        {" "}
        <Title txt={"Top Brands"} />
        <Brands />
      </div>
      <div data-aos="fade-down-right" data-aos-anchor-placement="top-bottom">
        {" "}
        <OrderSection />
      </div>
    </div>
  );
};

export default Home;

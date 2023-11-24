import { product4, offers } from "../imports";

import React from "react";

const ProductCard: React.FC<{
  title: string;
  description: string;
  imageUrl: string;
  big: boolean;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
}> = ({
  title,
  description,
  imageUrl,
  big,
  originalPrice,
  discountedPrice,
  discountPercentage,
}) => {
  return (
    <div
      className={
        !big
          ? `col-span-2 lg:col-span-1 cursor-pointer group flex flex-col bg-gray-200 rounded-md relative items-center justify-between overflow-hidden`
          : "row-span-full lg:row-span-2 col-span-full lg:col-span-2 cursor-pointer group flex flex-col bg-gray-200 rounded-md relative items-center justify-between overflow-hidden"
      }
    >
      <div
        className="flex justify-center items-center p-4 h-full 3xl:min-h-[330px] w-full"
        title={title}
      >
        {/* <span style={{ position: "relative", maxWidth: "100%" }}> */}
        <span
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "100%",
            height: "100%",
          }}
        >
          <img
            alt=""
            aria-hidden="true"
            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27260%27%20height=%27260%27/%3e"
            style={{
              display: "block",
              maxWidth: "100%",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
            }}
          />
          <img
            alt={title}
            src={imageUrl}
            decoding="async"
            className="transition duration-500 ease-in-out transform group-hover:scale-110 h-full w-full"
            // srcSet={`/assets/images/products/featured/${imageUrl}&w=384&q=75 1x, /assets/images/products/featured/${imageUrl}&w=640&q=75 2x`}
            style={{
              position: "absolute",
              inset: 0,
              boxSizing: "border-box",
              padding: 0,
              border: "none",
              margin: "auto",
              display: "block",
              width: 0,
              height: 0,
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </span>
      </div>
      <span className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 bg-heading text-white bg-red-700 text-10px md:text-sm leading-5 rounded-md inline-block px-2 xl:px-3 pt-0.5 pb-1">
        {discountPercentage}%{" "}
      </span>
      <div
        className="flex flex-col w-full px-4 pb-4 md:flex-row lg:flex-col 2xl:flex-row md:justify-between md:items-center lg:items-start 2xl:items-center md:px-5 3xl:px-7 md:pb-5 3xl:pb-7"
        title={title}
      >
        <div className="overflow-hidden ltr:md:pr-2 rtl:md:pl-2 ltr:lg:pr-0 rtl:lg:pl-0 ltr:2xl:pr-2 rtl:2xl:pl-2">
          <h2 className="mb-1 text-sm font-semibold truncate text-heading md:text-base xl:text-lg">
            {title}
          </h2>
          <p className="text-body text-xs xl:text-sm leading-normal xl:leading-relaxed truncate max-w-[250px]">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0 flex flex-row-reverse md:flex-col lg:flex-row-reverse 2xl:flex-col items-center md:items-end lg:items-start 2xl:items-end justify-end ltr:md:text-right rtl:md:text-left lg:ltr:text-left rtl:text-right ltr:xl:text-right rtl:xl:text-left mt-2 md:-mt-0.5 lg:mt-2 2xl:-mt-0.5">
          <del className="text-sm md:text-base lg:text-sm xl:text-base 3xl:text-lg">
            ${originalPrice.toFixed(2)}
          </del>
          <div className="text-heading font-segoe font-semibold text-base md:text-xl lg:text-base xl:text-xl 3xl:text-2xl 3xl:mt-0.5 ltr:pr-2 rtl:pl-2 ltr:md:pr-0 rtl:md:pl-0 ltr:lg:pr-2 rtl:lg:pl-2 ltr:2xl:pr-0 rtl:2xl:pl-0">
            ${discountedPrice.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-3 md:gap-5 xl:gap-7">
      <ProductCard
        title="Lenove Bag"
        big={true}
        description="Lenovo IdeaPad Slim 1 Laptop | 15.6 Inch Full HD Display | AMD Ryzen 3 7320U | 8GB RAM | 256GB SSD | AMD Radeon 610M Graphics | Win11 Home | QWERTZ | Grey | 3"
        imageUrl={offers}
        originalPrice={200.38}
        discountedPrice={160.38}
        discountPercentage={20}
      />
      <ProductCard
        title="ASUS L13"
        big={false}
        description="ASUS Zenbook Pro Duo 14 OLED Laptop | 14 Inch OLED 120Hz WQHD Touch Display | Intel i7-12700H | 16 GB RAM | 1 TB SSD | NVIDIA RTX 3050Ti | Windows 11 | QWERTZ"
        imageUrl={product4}
        originalPrice={400.0}
        discountedPrice={320.0}
        discountPercentage={20}
      />
      <ProductCard
        title="ASUS L13"
        big={false}
        description="ASUS Zenbook Pro Duo 14 OLED Laptop | 14 Inch OLED 120Hz WQHD Touch Display | Intel i7-12700H | 16 GB RAM | 1 TB SSD | NVIDIA RTX 3050Ti | Windows 11 | QWERTZ"
        imageUrl={product4}
        originalPrice={400.0}
        discountedPrice={320.0}
        discountPercentage={20}
      />
      <ProductCard
        title="ASUS L13"
        big={false}
        description="ASUS Zenbook Pro Duo 14 OLED Laptop | 14 Inch OLED 120Hz WQHD Touch Display | Intel i7-12700H | 16 GB RAM | 1 TB SSD | NVIDIA RTX 3050Ti | Windows 11 | QWERTZ"
        imageUrl={product4}
        originalPrice={400.0}
        discountedPrice={320.0}
        discountPercentage={20}
      />
      <ProductCard
        title="ASUS L13"
        big={false}
        description="ASUS Zenbook Pro Duo 14 OLED Laptop | 14 Inch OLED 120Hz WQHD Touch Display | Intel i7-12700H | 16 GB RAM | 1 TB SSD | NVIDIA RTX 3050Ti | Windows 11 | QWERTZ"
        imageUrl={product4}
        originalPrice={400.0}
        discountedPrice={320.0}
        discountPercentage={20}
      />
      {/* Add other ProductCard components for each product */}
    </div>
  );
};

export default ProductGrid;

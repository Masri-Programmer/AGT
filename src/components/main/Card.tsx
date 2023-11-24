interface ProductProps {
  title: string;
  details: string;
  src: string;
  // originalPrice: number;
  // discountedPrice: number;
  // discountPercentage: number;
}

const Card: React.FC<ProductProps> = ({ title, details, src }) => {
  return (
    <div
      className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start"
      role="button"
      title={title}
    >
      <div className="flex mb-3 md:mb-3.5 pb-0">
        <span
          style={{
            boxSizing: "border-box",
            display: "inline-block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
            position: "relative",
            maxWidth: "100%",
          }}
        >
          <span
            style={{
              boxSizing: "border-box",
              display: "block",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              maxWidth: "100%",
            }}
          >
            <img
              alt=""
              aria-hidden="true"
              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27324%27%20height=%27324%27/%3e"
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
          </span>
          <img
            alt={title}
            src={src}
            decoding="async"
            data-nimg="intrinsic"
            className="bg-white object-contain rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105"
            // srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-26-md.png&amp;w=384&amp;q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-26-md.png&amp;w=750&amp;q=100 2x"
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
            }}
          />
        </span>
        <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start"></div>
      </div>
      <div className="w-full overflow-hidden p-2 ltr:pl-0 rtl:pr-0">
        <h2 className="truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading">
          {title}
        </h2>
        <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
          {details}
        </p>
        <div className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3 text-heading text-red-600">
          <span className="inline-block false">$45.00</span>
          <del className="sm:text-base font-normal text-gray-800">$99.99</del>
        </div>
      </div>
    </div>
  );
};

export default Card;

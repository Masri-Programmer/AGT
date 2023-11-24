import { logoLenovo, download } from "../imports";
const Brands = () => {
  const brands = [
    {
      name: "Lenovo",
      slug: "lenovo",
      imageUrl: download,
      logoUrl: logoLenovo,
    },
    {
      name: "Lenovo",
      slug: "lenovo",
      imageUrl: download,
      logoUrl: logoLenovo,
    },
    {
      name: "Lenovo",
      slug: "lenovo",
      imageUrl: download,
      logoUrl: logoLenovo,
    },
    {
      name: "Lenovo",
      slug: "lenovo",
      imageUrl: download,
      logoUrl: logoLenovo,
    },
    // Add other brand objects similarly
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 md:gap-3 lg:gap-5 xl:gap-7">
      {/* Repeat this block for each brand */}
      {brands.map((brand) => (
        <a
          key={brand.name}
          className="group flex justify-center text-center relative overflow-hidden rounded-md"
          href={`/search?brand=${brand.slug}`}
        >
          <span className="group">
            <span>
              <img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27428%27%20height=%27428%27/%3e"
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
              alt={brand.name}
              src={brand.imageUrl}
              decoding="async"
              data-nimg="intrinsic"
              className="rounded-md object-cover transform transition-transform ease-in-out duration-500 group-
              hover:rotate-6 group-hover:scale-125 object-contain
              "
              srcSet={brand.imageUrl}
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
          <div className="absolute top left bg-black-400 w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80"></div>
          <div className="absolute top left h-full w-full flex items-center justify-center p-8">
            <img
              src={brand.logoUrl}
              alt={brand.name}
              className="flex-shrink-0"
            />
            {/* {brand.name} */}
          </div>
        </a>
      ))}
    </div>
  );
};

export default Brands;

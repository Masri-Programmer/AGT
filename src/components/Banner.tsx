import { banner2 } from "../imports";

const Banner = () => {
  return (
    <div>
      <a
        className="h-full group flex justify-center relative overflow-hidden"
        href="/collections/offer-everything"
      >
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
              alt=""
              aria-hidden="true"
              src={banner2}
            />
          </span>
          <img
            alt="Offer Off Everything"
            src={banner2}
            srcSet={banner2}
            decoding="async"
            data-nimg="intrinsic"
            className="bg-gray-300 object-cover w-full rounded-md"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
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
      </a>
    </div>
  );
};

export default Banner;

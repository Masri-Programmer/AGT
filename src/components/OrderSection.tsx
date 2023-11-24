const OrderSection = () => {
  return (
    <div>
      <div className="px-5 py-12 bg-opacity-0 sm:px-16 xl:px-0 md:py-14 xl:py-16 flex flex-col xl:flex-row justify-center xl:justify-between items-center rounded-lg bg-gray-200 py-10 md:py-14 lg:py-16">
        <div className="lg:-mt-2 xl:-mt-0.5 text-center ltr:xl:text-left rtl:xl:text-right mb-7 md:mb-8 lg:mb-9 xl:mb-0">
          <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading sm:mb-0 md:mb-2.5 lg:mb-3 xl:mb-3.5">
            Repair, Build, Reserve
          </h3>
          <p className="text-body text-xs md:text-sm leading-6 md:leading-7">
            Order Your Dream Item From anywheree
          </p>
        </div>
        <form className="flex-shrink-0 w-full sm:w-96 md:w-[545px]" noValidate>
          <div className="flex flex-col sm:flex-row items-start justify-end">
            <div className="w-full">
              <input
                id="subscription_email"
                name="subscription_email"
                type="email"
                placeholder="Write your email here"
                className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 px-4 lg:px-7 h-12 lg:h-14 text-center ltr:sm:text-left rtl:sm:text-right bg-white rounded-md"
                autoComplete="off"
                spellCheck="false"
                aria-invalid="false"
              />
            </div>
            <button
              data-variant="flat"
              className="bg-black  mx-2 text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart mt-3 sm:mt-0 w-full sm:w-auto ltr:sm:ml-2 rtl:sm:mr-2 md:h-full flex-shrink-0"
            >
              <span className="lg:py-0.5">Subscribe</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderSection;

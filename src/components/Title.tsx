import React from "react";

interface TitleProps {
  txt: string;
}

const Title: React.FC<TitleProps> = ({ txt }) => {
  return (
    <div className="grid place-content-center">
      <span className="font-samsung-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl p-4">
        {txt}
      </span>
    </div>
  );
};

export default Title;

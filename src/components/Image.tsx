import React, { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <img
      src={src}
      alt={alt}
      loading={"lazy"}
      className={`${className} ${
        isLoading
          ? "scale-[1.02] blur-xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }`}
      onLoad={handleImageLoaded}
    />
  );
};

export default Image;

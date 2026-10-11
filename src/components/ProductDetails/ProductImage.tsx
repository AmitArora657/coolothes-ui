import { useState } from "react";

interface ProductImageProps {
  images: string[];
  name: string;
}

const ProductImage = ({ images, name }: ProductImageProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <img src={selectedImage} alt={name} className="w-full rounded-xl" />

      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`h-20 w-20 overflow-hidden rounded-lg border-2 ${
                image === selectedImage ? "border-red-900" : "border-transparent"
              }`}
            >
              <img
                src={image}
                alt={`${name} ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImage;

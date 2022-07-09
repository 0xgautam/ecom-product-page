import { useState } from "react";
import ImagesList from "./ImagesList";
import LightBox from "./LightBox";

const images: { thumbnail: string; main: string }[] = [
  {
    thumbnail: "/images/image-product-1-thumbnail.jpg",
    main: "/images/image-product-1.jpg",
  },
  {
    thumbnail: "/images/image-product-2-thumbnail.jpg",
    main: "/images/image-product-2.jpg",
  },
  {
    thumbnail: "/images/image-product-3-thumbnail.jpg",
    main: "/images/image-product-3.jpg",
  },
  {
    thumbnail: "/images/image-product-4-thumbnail.jpg",
    main: "/images/image-product-4.jpg",
  },
];

const ProductImages = () => {
  const [selected, setSelected] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      {visible && (
        <LightBox
          visible={visible}
          images={images}
          current={selected}
          setVisible={setVisible}
        />
      )}
      <ImagesList
        images={images}
        selected={selected}
        setSelected={setSelected}
        setVisible={setVisible}
        mode={"DEFAULT"}
      />
    </>
  );
};

export default ProductImages;

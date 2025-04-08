import { setConfig, buildUrl } from "cloudinary-build-url";

export const useCloudinary = () => {
  setConfig({
    cloudName: "dqyh4h3oi",
  });


  const createImageInstance = (publicId) => {
    const image = buildUrl(publicId, {
      transformations: {
        format: "auto",
        quality: "auto",
      },
    });
    return image;
  };

  const createMiniImage = (publicId) => {
    const image = buildUrl(publicId, {
      transformations: {
        format: "auto",
        quality: "auto",
        resize: {
          width: 100,
          height: 100,
          type: "fit",
        },
      },
    });
    return image;
  };

  return {
    createImageInstance,
    createMiniImage,
  };
};

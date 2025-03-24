import { Cloudinary } from "@cloudinary/url-gen";
import { lazyload, placeholder } from "@cloudinary/vue";

export const useCloudinary = () => {
  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: "dqyh4h3oi",
    },
  });

  const plugins = [lazyload(), placeholder()];

  const createImageInstance = (publicId) => {
    const image = cloudinary.image(publicId);
    image.format("auto");
    return image;
  };

  const createVideoInstance = (publicId) => {
    const image = cloudinary.video(publicId);
    image.format("auto");
    return image;
  };

  return {
    createImageInstance,
    createVideoInstance,
    cloudinary,
    plugins,
  };
};

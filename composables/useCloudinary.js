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

  const createMiniImage = (publicId) => {
    const image = createImageInstance(publicId);
    image.resize("w_100", "h_100");
    return image;
  }

  return {
    createImageInstance,
    createMiniImage,
    createVideoInstance,
    cloudinary,
    plugins,
  };
};

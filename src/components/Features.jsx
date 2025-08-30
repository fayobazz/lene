import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon, images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    if (images && images.length > 0) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative size-full" onClick={handleCardClick}>
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-contain"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={closeModal}>
          <div className="relative max-w-3xl bg-white p-5 rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute right-3 top-3 text-2xl text-black">
              <FaTimes />
            </button>
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <img key={index} src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-auto" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">Some of our services</p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Below are digital services we offer to our clients. If you don't find what you're looking for, give us a call and we will figure it out together!
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard src="videos/hero-2.mp4" title="Application Development" description="." isComingSoon images={["img/about.png", "img/about.png", "img/about.png"]} />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard src="videos/hero-3.mp4" title="Website Design" description="We create websites that reflect the proper elegance your brand deserves." isComingSoon images={["img/about.png", "img/about.png", "img/about.png"]} />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard src="videos/feature-3.mp4" title="Branding" description="We create digital branding for your company to distinguish you from your competition." isComingSoon images={["img/about.png", "img/about.png", "img/about.png"]} />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard src="videos/feature-4.mp4" title="Digital Marketing" description="A cross-world AI Agent - elevating your gameplay to be more fun and productive." isComingSoon images={["img/about.png", "img/about.png", "img/about.png"]} />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">More coming soon.</h1>
            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video src="videos/feature-5.mp4" loop muted autoPlay className="size-full object-contain" />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;

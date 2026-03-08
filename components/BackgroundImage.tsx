import Image from "next/image";
import teamImage from "../public/team.png";

export const BackgroundImage = () => {
  return (
    // add a small top offset on narrow screens so content isn't hidden behind the hero
    <div className="absolute -z-10 opacity-80 inset-x-0 top-16 sm:top-0 w-full">
      <Image
        src={teamImage}
        alt=""
        className="w-full h-auto object-top opacity-80 blur-[2px] grayscale"
        priority
      />
    </div>
  );
};

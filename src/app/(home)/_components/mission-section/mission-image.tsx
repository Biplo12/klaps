import React from "react";
import Image from "next/image";

const MISSION_IMAGE_SRC = "/images/mission-section-image.jpg";
const MISSION_IMAGE_ALT =
  "Osoba rozłożona na fotelu w ciemnej sali kinowej z uniesioną ręką, niebieskie fotele w tle";

const MissionImage: React.FC = () => {
  return (
    <div className="relative aspect-3/4 w-full max-h-[650px] overflow-hidden">
      <Image
        src={MISSION_IMAGE_SRC}
        alt={MISSION_IMAGE_ALT}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 60vw, 50vw"
      />
    </div>
  );
};

export default MissionImage;

import { cn } from "@/helper/utils";
import Image, { StaticImageData } from "next/image";

export interface BlogDisplayProps {
  containerCls?: string;
  imageSrc?: string | StaticImageData;
  infoText?: string;
  title?: string;
  titleCls?: string;
  desc?: string;
  releasedDate?: string;
  infoTextCls?: string;
  infoTextContainerCls?: string;
  imageHeight?: number;
  imageWidth?: number; // In pixels, not percentages or viewport units.
}

const BlogDisplay = ({
  containerCls,
  imageSrc,
  releasedDate,
  imageHeight,
  title,
  desc,
  titleCls,
  infoTextContainerCls,
  infoTextCls,
  infoText,
  imageWidth,
}: BlogDisplayProps) => {
  return (
    <div className={cn("flex flex-col gap-2", containerCls)}>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt="Image"
          width={imageWidth}
          height={imageHeight}
        />
      )}
      <div className={cn("flex", infoTextContainerCls)}>
        <span className={cn("text-xs", infoTextCls)}>
          {infoText}•{releasedDate}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className={cn("text-lg font-semibold text-black", titleCls)}>
          {title}
        </h3>
        <p className="text-base">{desc}</p>
      </div>
      <div className="flex flex-row gap-2">
        <div className="rounded-xl border text-xs px-[6px] py-[2px] border-black">
          Test
        </div>
      </div>
      <div className="flex justify-end">
        <button className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-900">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogDisplay;

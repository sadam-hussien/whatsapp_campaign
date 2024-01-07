import cls from "@/helpers/cls";

import Image from "next/image";

import { ReactNode } from "react";

type Props = {
  className?: string;
  image?: string;
  width?: number;
  height?: number;
  title?: ReactNode;
};

export default function TableImageTitle({
  className,
  image,
  width = 32,
  height = 32,
  title,
}: Props) {
  return (
    <td className="p-0">
      <div
        className={cls(
          "flex items-center gap-sm text-sm text-accent",
          className,
        )}
      >
        {image && (
          <Image
            src={image}
            alt="image"
            width={width}
            height={height}
            className=""
          />
        )}

        {title && title}
      </div>
    </td>
  );
}

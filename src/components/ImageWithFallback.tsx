"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type Props = Omit<ImageProps, "src"> & {
  src: string;
  fallback?: string;
};

export default function ImageWithFallback({ src, fallback = "/next.svg", alt, ...rest }: Props) {
  const [current, setCurrent] = useState(src);

  return (
    <Image
      {...rest}
      src={current}
      alt={alt}
      onError={() => {
        if (current !== fallback) setCurrent(fallback);
      }}
    />
  );
}
import { LottieOptions } from "lottie-react";

import { lazy, RefObject, Suspense } from "react";

const LottieComponent = lazy(() => import("lottie-react"));

type Props = {
  options: LottieOptions;
  ref?:
    | ((instance: HTMLDivElement | null) => void)
    | RefObject<HTMLDivElement>
    | null
    | undefined;
};

export default function Lottie({ options, ref }: Props) {
  return (
    <Suspense fallback="">
      <LottieComponent {...options} ref={ref} />
    </Suspense>
  );
}

import cls from "@/helpers/cls";

import { ReactNode, memo } from "react";

import Lottie from "@/app/components/Lottie";

import lottieNoData from "@/app/assets/no-data-person.json";

type Props = { children: ReactNode; className?: string; isEmpty: boolean };

function TableContainer({ children, className, isEmpty = false }: Props) {
  return (
    <div className="overflow-x-auto mt-2xl">
      {isEmpty ? (
        <div className="flex flex-col justify-center items-center">
          <Lottie
            options={{
              animationData: lottieNoData,
              loop: true,
              style: {
                width: 600,
              },
            }}
          />
          <h5 className="text-4xl text-accent-content capitalize">
            No data found
          </h5>
        </div>
      ) : (
        <table
          className={cls(
            "w-full table align-middle border-separate border-spacing-y-4 backdrop-blur bg-base-200 bg-opacity-80 px-4",
            className,
          )}
        >
          {children}
        </table>
      )}
    </div>
  );
}

export default memo(TableContainer);

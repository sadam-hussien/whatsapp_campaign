import cls from "@/helpers/cls";

type Props = {
  className?: string;
};

export default function Loading({ className }: Props) {
  return (
    <div className="page-loading h-[300px] flex items-center justify-center">
      <span className={cls("loader", className)}></span>
    </div>
  );
}

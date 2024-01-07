type Props = {
  title: string;
  subTitle: string;
};

export default function PageTitle({ title, subTitle }: Props) {
  return (
    <div>
      <h2 className="text-2xl text-accent-content capitalize mb-xs">{title}</h2>
      <h6 className="capitalize">{subTitle}</h6>
    </div>
  );
}

import { layouts_transition_default } from "@/constants";

import Transition from "@/app/Transition";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <Transition options={layouts_transition_default}>
      <main className="relative py-4xl">
        <div className="container mx-auto">{children}</div>
      </main>
    </Transition>
  );
}

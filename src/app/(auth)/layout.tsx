import { layouts_transition_default } from "@/constants";

import Transition from "@/app/Transition";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <Transition options={layouts_transition_default}>
      <main className="grid grid-cols-1 lg:grid-cols-2">
        {/* content  */}
        <div className="">
          <div className="p-xl lg:p-[5rem] h-full flex flex-col justify-center">
            {children}
          </div>
        </div>
        {/* ******** */}

        {/* layout  */}
        <div className="lg:h-screen lg:sticky top-0 p-lg order-first lg:order-last">
          {/* <div className="h-full rounded-lg bg-[url('/images/auth-bg.jpg')] relative">
          
          </div> */}
        </div>
        {/* ******** */}
      </main>
    </Transition>
  );
}

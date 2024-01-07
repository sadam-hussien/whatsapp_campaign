import Form from "./components/form";

import Transition from "@/app/Transition";

import { pages_transition_default } from "@/constants";

export default function Login() {
  return (
    <Transition options={pages_transition_default}>
      {/* title  */}
      <div className="mb-xl">
        <h1 className="text-4xl text-accent-content mb-sm">Login</h1>
        <h4 className="text-lg">
          Welcome back!, We're thrilled to see you again.
        </h4>
      </div>
      {/* ***********  */}

      {/* form  */}
      <Form />
      {/* ***********  */}
    </Transition>
  );
}

import { EmailSignUp } from "@/components/EmailSignUp";
import { HiringCTA } from "@/components/HiringCTA";
import Illustration from "@/components/icons/Illustration_full.svg";

export default async function Home() {
  return (
    <main className="container mx-auto flex flex-col md:flex-row px-4">
      <div className="md:max-w-lg md:flex-1 md:gap-3">
        <section>
          <HiringCTA />
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl leading-10 font-extrabold tracking-tight">
            A better way to{" "}
            <span className="block text-indigo-400">ship web apps</span>
          </h1>
          <p className="mt-3 text-gray-300 leading-6 md:pr-7">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>
        </section>
        <section>
          <EmailSignUp />
        </section>
      </div>
      <Illustration aria-hidden className="md:flex-1 mt-12 md:mt-8 md:-mr-4" />
    </main>
  );
}

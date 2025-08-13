import { BackgroundLeft, BackgroundRight } from "@/assets/background";

export default function Home() {
  return (
    <main className="font-light text-xl">
      <header>
        <BackgroundLeft className="top-0 left-0" />
        <BackgroundRight className="top-0 right-0" />
        <div className="container mt-20 max-w-7xl">
          <h1>Making Technology Work for You Faster, Smarter, Better.</h1>
        </div>
      </header>
    </main>
  );
}

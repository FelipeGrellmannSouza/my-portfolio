import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";


export default function Home() {
  return (
    <div className={`bg-neutral-900 font-poppins h-screen`}>
      <div className="h-10/12 bg-cover bg-gradient-to-b from-amber-950 to-neutral-900">
        <Header />
        <Banner />

      </div>
    </div>
  );
}

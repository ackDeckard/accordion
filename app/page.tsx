import Image from "next/image";
import { Accordion } from "./components/Accordion";

export default function Home() {
  return (
    <main className="bg-palePurple bg-cardBackground lg:bg-cardBackgroundDesktop grid h-screen place-items-center bg-no-repeat">
      <Accordion />
    </main>
  );
}

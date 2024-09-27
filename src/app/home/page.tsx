import type { Metadata } from "next";

import Image from "next/image";

export const metadata: Metadata = {
  title: "Teste Next.js",
  description: "Apredizagem next",
};

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <div className="flex justify-center items-center gap-4">
        <p>Nome</p>
        <input type="text" placeholder="input" className="border-2 border-black rounded p-1" />
      </div>
      <div className="flex justify-center items-center gap-4">
        <p>Senha</p>
        <input type="text" placeholder="input" className="border-2 border-black rounded p-1" />
      </div>
    </div>
  );
}

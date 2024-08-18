import Image from "next/image";

import Board from "@/app/components/Board";

export default function Home() {
  return (
    <div className="App">
      <h1>Mine Sweeper</h1>
      <Board></Board>
    </div>
  );
}

import Container from "@/components/container/Container";
import NavBar from "@/components/navbar/NavBar";

export default function Home() {
  return (
    <div className="bg-[#FBFDFC] dark:bg-[#242424] min-h-screen">
      <div className="mx-10 h-full">
        <NavBar />
        <Container />
      </div>
    </div>
  );
}

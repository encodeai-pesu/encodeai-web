import Navbar from "@/components/Navbar";

export default function AlgoManiaRegister() {
  return (
    <div className="flex flex-col w-screen h-screen items-center gap-3 bg-background px-10">
      <Navbar />
      <h1 className="text-3xl font-semibold font-heading">
        Register for Algomania 2.0
      </h1>
    </div>
  );
}

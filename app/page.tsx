import Image from "next/image";

export default function Home() {
  return (
    <div className="h-10 w-full flex mt-2">
      <h1 className="w-full text-center md:pl-10 w-50 font-mono font-extrabold text-l p-5 text-[20px] mt-2 lg:text-[24px] w-80">Nils Sohn</h1>
      <ul className="hidden md:flex w-200 pl-14 pr-14 mt-3 justify-between p-5 lg:justify-center item-center w-full mt-3">
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

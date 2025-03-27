import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/faktora-logo.svg" alt="Faktora Logo" width={40} height={40} className="mr-1" />
        <span className="font-bold text-xl">ai</span>
      </div>
      <div className="flex items-center gap-8">
        <Link href="#" className="text-black hover:text-[#3773f4]">
          Docs
        </Link>
        <Link href="#" className="text-black hover:text-[#3773f4]">
          Community
        </Link>
      </div>
    </footer>
  );
}

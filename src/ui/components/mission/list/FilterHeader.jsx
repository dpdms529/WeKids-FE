import Image from "next/image";

export default function FilterHeader() {
  return (
    <div className="flex items-center gap-1 mb-4 px-1 ml-3">
      <Image
        src="/images/filters.svg"
        alt="filter icon"
        width={16}
        height={16}
      />
      <span className="text-sm font-medium">FILTER</span>
    </div>
  );
}
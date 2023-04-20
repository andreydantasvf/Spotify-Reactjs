import Image from "next/image";

interface MixProps {
  title: string;
  description: string;
}

export function Mix({ title, description }: MixProps) {
  return (
    <a href='' className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
      <Image src="/matue.jpg" width={120} height={120} alt="Chase Atlantic album" className="w-full" />
      <strong className="font-semibold">{title}</strong>
      <span className="text-sm text-zinc-500">{description}</span>
    </a>
  )
}
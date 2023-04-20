import { Mic2, Repeat, SkipForward, Volume } from "lucide-react";
import { Laptop2 } from "lucide-react";
import { Maximize2 } from "lucide-react";
import { LayoutList } from "lucide-react";
import { Play, Shuffle, SkipBack } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src="/chase-atlantic.jpg" width={56} height={56} alt="Chase Atlantic album" />
        <div className="flex flex-col">
          <strong className="font-normal">Friends</strong>
          <span className="text-xs text-zinc-400">Chase Atlantic</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200 cursor-pointer" />
          <SkipBack size={20} className="text-zinc-200 cursor-pointer" />

          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play />
          </button>

          <SkipForward size={20} className="text-zinc-200 cursor-pointer" />
          <Repeat size={20} className="text-zinc-200 cursor-pointer" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rounded-full" />
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />

          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 w-10 h-1 rounded-full" />
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  )
}
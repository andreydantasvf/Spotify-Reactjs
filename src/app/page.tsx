import { Album } from '@/components/Album';
import { Footer } from '@/components/Footer';
import { Mix } from '@/components/Mix';
import { Sidebar } from '@/components/Sidebar';

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button>
              <ChevronLeft className="rounded-full bg-black/40 p-1" />
            </button>
            <button>
              <ChevronRight className="rounded-full bg-black/40 p-1" />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <Album title="Chase Atlantic" />
            <Album title="Chase Atlantic" />
            <Album title="Chase Atlantic" />
            <Album title="Chase Atlantic" />
            <Album title="Chase Atlantic" />
            <Album title="Chase Atlantic" />
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Andrey Dantas</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <Mix
              title="Daily mix 1"
              description="Wallows, COIN, girl in red and more"
            />
            <Mix
              title="Daily mix 2"
              description="Wallows, COIN, girl in red and more"
            />
            <Mix
              title="Daily mix 3"
              description="Wallows, COIN, girl in red and more"
            />
            <Mix
              title="Daily mix 4"
              description="Wallows, COIN, girl in red and more"
            />
            <Mix
              title="Daily mix 5"
              description="Wallows, COIN, girl in red and more"
            />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

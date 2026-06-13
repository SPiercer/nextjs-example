import { Luggage, Settings, Store, Layers3, Archive, Copy, Puzzle, Search } from "lucide-react"

export default function Home() {
  return <main className="bg-amber-50 w-lvw h-lvh p-6">
    <nav className="w-full max-h-24 h-[10%] bg-amber-300 flex
      shadow-2xl shadow-red-300 border-5 border-blue-400">

      <div className="flex-1 flex flex-row items-center justify-between">
        <Luggage size={24} />
        <Settings size={24} />
        <Store size={24} />
        <Layers3 size={24} />
        <Archive size={24} />
        <Copy size={24} />
        <Puzzle size={24} />
      </div>

      <div className="bg-green-500 flex-2 flex items-center pl-4">
        {/*<input type="text" className="bg-blue-100" />*/}
        <search className="bg-amber-700 px-6 w-1/2 h-12 rounded-3xl flex items-center justify-between">
          <input type="text" className="flex-1 focus:outline-none bg-transparent text-white" placeholder="Search..." />
          <Search />
        </search>
      </div>


    </nav>

  </main>
}

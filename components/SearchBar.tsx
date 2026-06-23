
export default function SearchBar(){
    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <input type="text" placeholder="Search..." className="bg-white text-black placeholder:text-zinc-500 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
    );
}
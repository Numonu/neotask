export default function Button({className}){
    return <>
        <button className={`bg-neutral-800 text-neutral-50 border-black w-full py-2 text-xl font-medium rounded-md border-b-4 hover:bg-amber-500 hover:border-amber-700 transition-colors ${className}`}>
            Tamare oh
        </button>
    </>
}
interface ItextProps {
    text : string
}

export function Titulo({ text }: ItextProps){
    return (
        <header className="w-full bg-gray-200 p-4 flex justify-center">
            <h1 className="font-bold text-black">{text}</h1>
        </header>
    )
}
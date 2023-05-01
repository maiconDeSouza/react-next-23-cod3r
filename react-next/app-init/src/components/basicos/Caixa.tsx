export function Caixa({color, number}: {color : string, number : number}){
    return (
        <div className={`w-[300px] h-[300px] ${color} rounded-md flex justify-center items-center text-[4rem]`}>
            #{number}
        </div>
    )
}
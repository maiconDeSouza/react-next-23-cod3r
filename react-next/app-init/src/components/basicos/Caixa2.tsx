export function Caixa2(props : any){
    return (
        <div className={`w-[300px] h-[300px] bg-purple-700 rounded-md flex justify-center items-center text-[4rem]`}>
            {props.children}
        </div>
    )
}
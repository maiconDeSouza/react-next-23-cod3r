import { Caixa } from "@/components/basicos/Caixa";
import { Caixa2 } from "@/components/basicos/Caixa2";
import { Titulo } from "@/components/basicos/Titulo";

export default function Primeiro(){
    return (
        <>
            <Titulo text = "Primeiro MCN"/>
            <div className="flex justify-center gap-2 p-2">
                <Caixa color="bg-red-900" number={1}/>
                <Caixa color="bg-blue-900" number={2}/>
                <Caixa color="bg-blue-300" number={3}/>
                <Caixa2>Casa</Caixa2>
            </div>

        </>
    )
}
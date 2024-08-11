import { CircleDollarSign, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Sales() {
    return(
        <Card className="flex-1" >
            <CardHeader>
                <div className="flex items-center justify-center" >
                    <CardTitle>
                        Últimos Clientes
                    </CardTitle>
                    <CircleDollarSign className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>
                    Novos clientes nas últimas 24 horas
                </CardDescription>
            </CardHeader>

            <CardContent>
                <article className="flex item-center gap-2 border-b py-2" >
                    <Avatar className="w-8 h-8" >
                        <AvatarImage src="https://github.com/Elinaldo1.png" />
                        <AvatarFallback>Elinaldo</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold" >
                            Elinaldo dev
                        </p>
                        <span className="text-[12px] sm:text-sm text-gray-400" >super@super.com</span>
                    </div>
                </article>
                <article className="flex item-center gap-2 border-b py-2" >
                    <Avatar className="w-8 h-8" >
                        <AvatarImage src="https://github.com/Elinaldo1.png" />
                        <AvatarFallback>Elinaldo</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold" >
                            Elinaldo dev
                        </p>
                        <span className="text-[12px] sm:text-sm text-gray-400" >super@super.com</span>
                    </div>
                </article>
                <article className="flex item-center gap-2 border-b py-2" >
                    <Avatar className="w-8 h-8" >
                        <AvatarImage src="https://github.com/Elinaldo1.png" />
                        <AvatarFallback>Elinaldo</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold" >
                            Elinaldo dev
                        </p>
                        <span className="text-[12px] sm:text-sm text-gray-400" >super@super.com</span>
                    </div>
                </article>
            </CardContent>
        </Card>
    )
}
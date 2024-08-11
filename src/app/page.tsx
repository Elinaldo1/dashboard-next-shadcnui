import { ChartOverview } from "@/components/chart";
import { Sales } from "@/components/slaes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, DollarSign, Percent, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4" >
      <section
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center" >
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none" >
                Total Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
              Total vendas em 90 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold" >R$ 40.000,00</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center" >
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none" >
                Novos clientes
              </CardTitle>
              <Users className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
              Novos clientes em 90 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold" >100</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center" >
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none" >
                Pedidos hoje
              </CardTitle>
              <Percent className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
              Total de pedidos de hoje
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold" >80</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center" >
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none" >
                Total Pedidos
              </CardTitle>
              <BadgeDollarSign className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
              Total de pedidos em 30 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold" >8000</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4" >
        <ChartOverview/>
        <Sales/>
      </section>
    </main>
  );
}
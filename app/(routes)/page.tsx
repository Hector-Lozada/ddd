import { UserButton } from "@clerk/nextjs";
import { CardSummary } from "./components/CardSummary";
import { BookOpenCheck, DollarSign, LineChart, Percent, UserRound, Waypoints } from "lucide-react";



export default function Home() {
  return (
    <div>
      <UserButton/>
      <h2 className="text-2xl mb-4">Track Record</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        <CardSummary
          icon={DollarSign}
          total="$ 215,000.00"
          title="Capital"
          average={15}
          tooltipText="Capital total"
        />
        <CardSummary
          icon={LineChart}
          total="$ 15,000"
          average={100}
          title="P&L"
          tooltipText="Profit"
        />
        <CardSummary
          icon={Percent}
          total="100%"
          average={100}
          title="Winrate"
          tooltipText="Efectividad de la metodología"
        />
      </div>
    </div>
  )
}

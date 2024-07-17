import { UserButton } from "@clerk/nextjs";
import { CardSummary } from "./components/CardSummary";
import { BookOpenCheck, DollarSign, LineChart, Percent, UserRound, Waypoints } from "lucide-react";

export const dataCardsSummary = [
  {
    icon: DollarSign ,
    total: "$ 215,500.23",
    title: "Capital",
    average: 100,
    tooltipText: "Capital total",
  },
  {
    icon: LineChart,
    total: "$ 15,500.23",
    title: "P&L",
    average: 100,
    tooltipText: "Profit",
  },
  {
    icon: Percent,
    total: "100%",
    title: "Winrate",
    average: 100,
    tooltipText: "Efectividad de la estrategia",
  },
]

export default function Home() {
  return (
    <div>
      <UserButton/>
      <h2 className="text-2xl mb-4">Track Record</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {dataCardsSummary.map(({icon, total, title, average, tooltipText}) => (
          <CardSummary 
            key={title}
            icon={icon}
            total={total}
            title={title}
            average={average}
            tooltipText={tooltipText}
          />
        ))}
      </div>
    </div>
  )
}

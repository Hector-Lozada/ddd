import { CardSummary } from "./components/CardSummary";
import { DollarSign, LineChart, Percent } from "lucide-react";

export const dataCardsSummary = [
  {
    icon: DollarSign,
    total: "$ 200,000.00",
    title: "Capital",
    average: 100,
    tooltipText: "Initial Capital",
  },
  {
    icon: DollarSign ,
    total: "$ 215,500.23",
    title: "Total",
    average: 100,
    tooltipText: "Total Capital",
  },
  {
    icon: LineChart,
    total: "$ 15,500.23",
    title: "P&L",
    average: 100,
    tooltipText: "Profit & Loss",
  },
  {
    icon: Percent,
    total: "100%",
    title: "Winrate",
    average: 100,
    tooltipText: "Strategy effectiveness",
  },
]

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl mb-4 font-bold">Track Record</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 lg:gap-x-20 font-semibold">
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

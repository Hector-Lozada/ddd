import { CustomIcon } from "@/components/CustomIcon";
import { CardSummaryProps } from "./CardSummary.types";
import { CustomTooltip } from "@/components/CustomTooltip/CustomTooltip";
import { cn } from "@/lib/utils";

export  function CardSummary(props: CardSummaryProps) {
    const {average, icon:Icon, title, tooltipText, total} = props;
  return (
    <div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition">
        <div className="flex justify-between">
            <div className="flex gap-x2 items-center">
                <CustomIcon icon={Icon} />
                {title}
            </div>
            <CustomTooltip content={tooltipText}/>
        </div>
        <div className="flex gap-4 mt-2 md:mt-4">
            <p className="text-2xl font-semibold">{total}</p>
            <div className="flex gap-1 px-2 items-center rounded-lg bg-black text-white  ">
                {average}%
            </div>
        </div>
    </div>
  )
}

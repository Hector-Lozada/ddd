import { CustomIcon } from "@/components/CustomIcon";
import { CardSummaryProps } from "./CardSummary.types";
import { CustomTooltip } from "@/components/CustomTooltip/CustomTooltip";

export  function CardSummary(props: CardSummaryProps) {
    const {average, icon:Icon, title, tooltipText, total} = props;
  return (
    <div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition">
        <div className="flex justify-between">
            <div className="flex gap-x2 items-center">
                <CustomIcon icon={Icon} />
                {title}
            </div>
                {total}
            <CustomTooltip content={tooltipText}/>
            <div>
            </div>
        </div>
    </div>
  )
}

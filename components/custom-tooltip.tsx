import { format } from "date-fns";

import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/lib/utils";

export default function CustomTooltip({ active, payload }: any) {
  if (!active) {
    return null;
  }

  const date = payload[0].payload.date;
  const income = payload[0].value as number;
  const expenses = payload[1].value as number;

  return (
    <div className="rounded-sm bg-background shadow-sm border overflow-hidden">
      <div className="text-sm p-2 px-3 bg-muted text-muted-foreground">
        {format(date, "MMM dd, yyyy")}
      </div>
      <Separator />
      <div className="p-2 px-3 space-y-1">
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-2">
            <div className="size-1.5 rounded-full bg-blue-500" />
            <p className="text-sm text-foreground">Income</p>
          </div>
          <p className="text-sm text-right font-medium">
            {formatCurrency(income)}
          </p>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-2">
            <div className="size-1.5 rounded-full bg-rose-500" />
            <p className="text-sm text-foreground">Expenses</p>
          </div>
          <p className="text-sm text-right font-medium">
            {formatCurrency(expenses * -1)}
          </p>
        </div>
      </div>
    </div>
  );
}

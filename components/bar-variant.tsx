import { format } from "date-fns";
import {
  Tooltip,
  XAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";

import CustomTooltip from "@/components/custom-tooltip";

type Props = {
  data: {
    date: string;
    income: number;
    expenses: number;
  }[];
};

export default function BarVariant({ data }: Props) {
  return (
    <ResponsiveContainer
      width={"100%"}
      height={350}
    >
      <BarChart data={data}>
        <CartesianGrid strokeDasharray={"3 3"} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="date"
          tickFormatter={(value) => format(value, "MMM dd, yyyy")}
          style={{ fontSize: "12px" }}
          tickMargin={16}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey={"income"}
          fill="#22D3EE"
          className="drop-shadow-sm"
        />
        <Bar
          dataKey={"expenses"}
          fill="#EE2222"
          className="drop-shadow-sm"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

"use client"

import { 
  CartesianGrid, 
  Line, 
  LineChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts"

// Mock data for demonstration
const data = [
  { name: "Jan", painRelief: 400, allergy: 240, digestive: 320, diabetes: 180 },
  { name: "Feb", painRelief: 380, allergy: 260, digestive: 300, diabetes: 200 },
  { name: "Mar", painRelief: 420, allergy: 290, digestive: 340, diabetes: 210 },
  { name: "Apr", painRelief: 450, allergy: 350, digestive: 360, diabetes: 220 },
  { name: "May", painRelief: 470, allergy: 380, digestive: 350, diabetes: 230 },
  { name: "Jun", painRelief: 500, allergy: 410, digestive: 370, diabetes: 240 },
]

export function StockChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="painRelief"
            stroke="#4f46e5"
            strokeWidth={2}
            activeDot={{ r: 8 }}
            name="Pain Relief"
          />
          <Line
            type="monotone"
            dataKey="allergy"
            stroke="#06b6d4"
            strokeWidth={2}
            name="Allergy"
          />
          <Line
            type="monotone"
            dataKey="digestive"
            stroke="#10b981"
            strokeWidth={2}
            name="Digestive"
          />
          <Line
            type="monotone"
            dataKey="diabetes"
            stroke="#f59e0b"
            strokeWidth={2}
            name="Diabetes"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
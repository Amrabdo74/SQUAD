import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", sales: 4000, pv: 2400, amt: 2400 },
  { name: "February", sales: 3000, pv: 1398, amt: 2210 },
  { name: "March", sales: 2000, pv: 9800, amt: 2290 },
  { name: "April", sales: 2780, pv: 3908, amt: 2000 },
  { name: "May", sales: 1890, pv: 4800, amt: 2181 },
  { name: "June", sales: 2390, pv: 3800, amt: 2500 },
  { name: "July", sales: 3490, pv: 4300, amt: 2100 },
];
  
  const dataArea = [
    { name: 'January', sales: 2400, pv: 2400, amt: 2400 },
    { name: 'February', sales: 1398, pv: 1398, amt: 2210 },
    { name: 'March', sales: 9800, pv: 9800, amt: 2290 },
    { name: 'April', sales: 3908, pv: 3908, amt: 2000 },
    { name: 'May', sales: 4800, pv: 4800, amt: 2181 },
    { name: 'June', sales: 3800, pv: 3800, amt: 2500 },
    { name: 'July', sales: 4300, pv: 4300, amt: 2100 },
  ];
const MyChart = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-6  p-2">
        <div className="bg-light">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart width="100%" height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <YAxis /> */}
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
      <div className="col-12 col-md-6  p-2 ">
        <div className="bg-light">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart width="100%" height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <YAxis /> */}
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="pv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
        </div>
        
      </div>
      <div className="col-12 col-md-6  p-2 ">
        <div className="bg-light">
        <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
          <Bar dataKey="pv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

        </div>
        
      </div>
      <div className="col-12 col-md-6  p-2 ">
        <div className="bg-light">
        <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
          <Bar dataKey="pv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

        </div>
        
      </div>

    </div>
  );
};

export default MyChart;

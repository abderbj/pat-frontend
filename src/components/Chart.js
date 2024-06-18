import React from 'react'
import './Chart.css'
import { AreaChart , Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useState , useEffect} from 'react';
function Chart(props) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentMonthName = monthNames[currentMonth - 1]; 
    console.log(currentMonthName);

    const [month, setMonth] = useState(currentMonthName);
    console.log("heyy");
    console.log(props.props[month].fifteen);
    const initialData = [
        {
            "name": "5k",
            "pv": props.props[month].five,
        },
        {
            "name": "10k",
            "pv": props.props[month].ten,
        },
        {
            "name": "15k",
            "pv": props.props[month].fifteen,
        },
        {
            "name": "20k",
            "pv": props.props[month].twenty,
        },
        {
            "name": "25k",
            "pv": props.props[month].twentyFive,
        },
        {
            "name": "30k",
            "pv": props.props[month].thirty,
        },
        {
            "name": "35k",
            "pv": props.props[month].thirtyFive,
        },
        {
            "name": "40k",
            "pv": props.props[month].fourty,
        },
        {
            "name": "45k",
            "pv": props.props[month].fourtyFive,
        },
        {
            "name": "50k",
            "pv": props.props[month].fifty,
        },
        {
            "name": "55k",
            "pv": props.props[month].fiftyFive,
        },
        {
            "name": "60k",
            "pv": props.props[month].sixty,
        }
    ] 
    const [data, setData] = useState(initialData);
    useEffect(() => {
        const newData = [
            {
                "name": "5k",
                "pv": props.props[month].five,
            },
            {
                "name": "10k",
                "pv": props.props[month].ten,
            },
            {
                "name": "15k",
                "pv": props.props[month].fifteen,
            },
            {
                "name": "20k",
                "pv": props.props[month].twenty,
            },
            {
                "name": "25k",
                "pv": props.props[month].twentyFive,
            },
            {
                "name": "30k",
                "pv": props.props[month].thirty,
            },
            {
                "name": "35k",
                "pv": props.props[month].thirtyFive,
            },
            {
                "name": "40k",
                "pv": props.props[month].fourty,
            },
            {
                "name": "45k",
                "pv": props.props[month].fourtyFive,
            },
            {
                "name": "50k",
                "pv": props.props[month].fifty,
            },
            {
                "name": "55k",
                "pv": props.props[month].fiftyFive,
            },
            {
                "name": "60k",
                "pv": props.props[month].sixty,
            }
        ] 

        setData(newData);
    }, [month]);
    
    const handleChange = (event) => {
        setMonth(event.target.value);
    };
  return (
    <div className='chart'>
        <div className='chart_header'>
          <h1 className='chart_title'>Détailles des ventes
          </h1>
            <div className='select_container'>
              <select value={month} onChange={handleChange} className='chart_select'>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
              </select>
            </div>
        </div>
        <AreaChart width={1050} height={360} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#019ADD" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#019ADD" stopOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis dataKey="name" className='tick-labels' />
            <YAxis
                ticks={[20, 40, 60, 80, 100]}
                tickFormatter={(value) => `${value}%`}
                className='tick-labels'
            />
            <CartesianGrid vertical={false} strokeWidth={0.4}/>
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#019ADD" fillOpacity={1} fill="url(#colorPv)" dot={{ stroke: '#019ADD', strokeWidth: 2, fill: '#019ADD' }} />
        </AreaChart>

    </div>
  )
}

export default Chart

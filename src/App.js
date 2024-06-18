import AddActionForm from './components/AddActionForm';
import ArticlesPage from './pages/Articles';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import AddProducts from "./pages/AddProducts";
import EventsCalendarPage from './pages/Calendar';
import StatisticCard from "./components/StatisticCard";
import Chart from "./components/Chart";
import ToDoPage from "./pages/ToDo";
import Dashboard from './DashboardLayout/Dashboard';
import Animals from './pages/Animals';

const theme = createTheme({
  typography: {
    fontFamily: "Manrope, sans-serif",
  },
});

function App() {
  const props = {
    January: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    February: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    March: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    April: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    May: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    June: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    July: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    August: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    September: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    October: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    November: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    December: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
  };
  const events = [
    {
      id: 0,
      image: 'https://via.placeholder.com/50', // Replace with your image URL
      title: 'Design Conference',
      date: 'Today 07:19 AM',
      address: '56 Davion Mission Suite 157',
      country: 'Meaghanberg',
      start: new Date(2024, 6, 3, 10, 0),
      end: new Date(2024, 6, 4, 12, 0),
      allDay: true,
    },
    {
      id: 1,
      image: 'https://via.placeholder.com/50', // Replace with your image URL
      title: 'Weekend Festival',
      date: '16 October 2019 at 5.00 PM',
      address: '853 Moore Flats Suite 158',
      country: 'Sweden',
      start: new Date(2024, 6, 16, 10, 0),
      end: new Date(2024, 6, 18, 12, 0),
      allDay: true,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/50', // Replace with your image URL
      title: 'Glastonbury Festival',
      date: '20-22 October 2019 at 8.00 PM',
      address: '646 Walter Road Apt. 571',
      country: 'Turks and Caicos Islands',
      start: new Date(2024, 6, 20, 11, 0),
      end: new Date(2024, 6, 23, 12, 0),
      allDay: true,
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/50', // Replace with your image URL
      title: 'Ultra Europe 2019',
      date: '25 October 2019 at 10.00 PM',
      address: '506 Satterfield Tunnel Apt. 963',
      country: 'San Marino',
      start: new Date(2024, 6, 24, 10, 0),
      end: new Date(2024, 6, 26, 12, 0),
      allDay: true,
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/50', // Replace with your image URL
      title: 'Ultra Europe 2020',
      date: '25 October 2019 at 10.00 PM',
      address: '506 Satterfield Tunnel Apt. 963',
      country: 'San Marino',
      start: new Date(2024, 6, 27, 10, 0),
      end: new Date(2024, 6, 28, 12, 0),
      allDay: true,
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/50', // Replace with your image URL
      title: 'Ultra dfgdffgdfgope 2020',
      date: '25 Octoberdfgdf 2019 at 10.00 PM',
      address: '506 Satdfgterfield Tunnel Apt. 963',
      country: 'San Mdfgdfarino',
      start: new Date(2024, 6, 28, 10, 0),
      end: new Date(2024, 6, 29, 12, 0),
      allDay: true,
    },
  ];
  const toDoTasks = [
    {id:0,
     isChecked:false,
     isFavourite:false,
     title:'Meeting with CEO'
    },
    {id:1,
      isChecked:false,
      isFavourite:false,
      title:'Pick up kids from school'
     },
     {id:2,
      isChecked:false,
      isFavourite:false,
      title:'Shopping with Brother'
     },
     {id:3,
      isChecked:false,
      isFavourite:false,
      title:"Going to Dia's School"
     },
     {id:4,
      isChecked:false,
      isFavourite:false,
      title:'Check design files'
     },
     {id:5,
      isChecked:false,
      isFavourite:false,
      title:'Update file'
     },
     {id:6,
      isChecked:false,
      isFavourite:false,
      title:'Review with HR'
     }
  ]

  const animals = [
    {id:0,
      name:'PETER',
      isMale:false,
      image:'/src/assets/animal-default.png'
    },
    {id:1,
      name:'ZION',
      isMale:true,
      image:'/src/assets/animal-default.png'
    },
    {id:2,
      name:'ARISTO',
      isMale:false,
      image:'/src/assets/animal-default.png'
    },
    {id:3,
      name:'YUKI',
      isMale:false,
      image:'/src/assets/animal-default.png'
    },
    {id:4,
      name:'KAYEN',
      isMale:true,
      image:'/src/assets/animal-default.png'
    },
    {id:5,
      name:'KAYEN',
      isMale:true,
      image:'/src/assets/animal-default.png'
    },
    {id:6,
      name:'KAYEN',
      isMale:true,
      image:'/src/assets/animal-default.png'
    },
    {id:7,
      name:'KAYEN',
      isMale:true,
      image:'/src/assets/animal-default.png'
    },
    {id:8,
      name:'KAYEN',
      isMale:true,
      image:'/src/assets/animal-default.png'
    },
    {id:9,
      name:'KAYEN',
      isMale:true,
      image:'/src/assets/animal-default.png'
    },
    {id:10,
      name:'KAYEN',
      isMale:true,
      image:'/src/assets/animal-default.png'
    },
    {id:11,
      name:'KAYEN',
      isMale:true,
      image:'/src/assets/animal-default.png'
    },
  ]
  
  return (
    <div className="App">
      {/* <Chart props={props} /> */}
      {/* <EventsCalendar />  */}
      {/* <EventsCalendarPage events={events} /> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Error />} />
            <Route path="/addProduct" element={<AddProducts />} />
            <Route
              path="/calendar"
              element={<EventsCalendarPage events={events} />}
            />
            <Route path="/todo" element={<ToDoPage toDoTasks={toDoTasks} />} />
            <Route path="/articles" element={<ArticlesPage/>} />
            <Route path="/animals" element={<Animals animals={animals}/>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

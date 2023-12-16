import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';    
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);


export const CalenderComponent = () => {

    const myEventsList = [
          {
            title: 'Meeting 1',
            start: new Date(2023, 11, 14, 10, 0), // year, month (0-11), day, hour, minute
            end: new Date(2023, 11, 14, 11, 30),
          },
          {
            title: 'Meeting 2',
            start: new Date(2023, 11, 15, 14, 0),
            end: new Date(2023, 11, 15, 15, 30),
          },
          {
            title: 'Do some research about generative AI',
            start: new Date(2023, 11, 16, 20, 0), // 8:00 pm
            end: new Date(2023, 11, 16, 22, 0),   // 10:00 pm 
          },
    ]
  return (
    <div>
        <div>
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 900 ,padding:'20px'}}
            />
        </div>
    </div>
  )
}

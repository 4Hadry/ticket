import CalendarBox from "./components/CalendarBox";

import RangeCalendar from "./components/RangeCalendar";
import TimeSelector from "./components/TimeSelector";
import TopCalendars from "./components/TopCalendars";

export default function DatePickerPage() {
  return (
    <div className="w-full bg-[#253242] ">
      <TopCalendars />
      
      <RangeCalendar />
    </div>
  );
}

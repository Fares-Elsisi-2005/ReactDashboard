 import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));  
  const isSmall = useMediaQuery('(max-width:500px)');  
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}=${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"} // 👈 stack on mobile
        justifyContent="space-between"
      >
        {/* CALENDAR SIDEBAR */}
        <Box
          flex={isMobile ? "1 1 auto" : "1 1 20%"} // 👈 adapt width
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
          mb={isMobile ? "20px" : 0} // add spacing on mobile
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
              <Box flex="1 1 100%" ml={isMobile ? 0 : "15px"} pb="30px"
                  sx={isSmall?{
                      "& .fc .fc-today-button": {
                       mt:"10px"
                  }
              }:{}}>
          <FullCalendar
            height={isMobile ? "60vh" : "75vh"} // 👈 shrink on mobile
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: isMobile
                ? "dayGridMonth,listMonth"  
                : "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1234", title: "All-day event", date: "2025-08-19" },
              { id: "4321", title: "Timed event", date: "2025-08-20" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;

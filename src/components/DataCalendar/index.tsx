'use client'

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarClock, CalendarIcon, ChevronLeft, ChevronRight, Columns2, Grid3x3, LayoutGrid, List } from "lucide-react";


import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


import ExpandButton from './ExpandButton';


// Event interface
export interface Event {
    id: number | string;
    title: string;
    start: Date;
    end: Date;
    classNames?: string;
}

// DataCalendarProps interface
interface DataCalendarProps {
    data: Event[];
    onEventClick?: (event: Event) => void;
    onCellClick?: (date: Date) => void;
}

// Cell Classes
const cellClasses = "rounded bg-white p-2 cursor-pointer dark:bg-slate-800";
const eventClasses = "text-sm p-1 my-1 rounded cursor-pointer dark:text-slate-800 hover:opacity-80";


// DataCalendar component
const DataCalendar: React.FC<DataCalendarProps> = ({ data, onEventClick, onCellClick }) => {
    const [view, setView] = useState<'day' | 'week' | 'month' | 'year'>('month');
    const [currentDate, setCurrentDate] = useState(new Date());
    const [mounted, setMounted] = useState(false);


    // Format event time
    const formatEventTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };


    // Render Day View
    const renderDayView = useCallback(() => {
        const dayEvents = data.filter(event =>
            event.start.toDateString() === currentDate.toDateString()
        );

        const hours = Array.from({ length: 24 }, (_, i) => i);

        return (
            <div className="grid grid-cols-1 gap-1">
                {hours.map(hour => {
                    const cellDate = new Date(currentDate);
                    cellDate.setHours(hour, 0, 0, 0);
                    return (
                        <div
                            key={hour}
                            className={cellClasses}
                            onClick={() => onCellClick && onCellClick(cellDate)}
                        >
                            <div className="font-bold">{`${hour}:00`}</div>
                            {dayEvents.filter(event => event.start.getHours() === hour).map(event => (
                                <div
                                    key={event.id}
                                    className={cn(
                                        eventClasses,
                                        event.classNames || "bg-blue-100"
                                    )}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onEventClick && onEventClick(event);
                                    }}
                                >
                                    <div className="font-semibold">{event.title}</div>
                                    <div className="text-xs">
                                        {formatEventTime(event.start)} - {formatEventTime(event.end)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        );
    }, [currentDate, data, onEventClick, onCellClick]);


    // Render Week View
    const renderWeekView = useCallback(() => {
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
        const weekNumber = getWeekNumber(startOfWeek);

        const days = Array.from({ length: 7 }, (_, i) => {
            const day = new Date(startOfWeek);
            day.setDate(startOfWeek.getDate() + i);
            return day;
        });

        const hours = Array.from({ length: 24 }, (_, i) => i);

        // Create a 2D array to store events for each day and hour
        const eventGrid = days.map(() => hours.map(() => [] as Array<{ event: Event, duration: number }>));

        // Populate the event grid
        data.forEach(event => {
            const eventDay = days.findIndex(day => day.toDateString() === event.start.toDateString());
            if (eventDay !== -1) {
                const startHour = event.start.getHours();
                const endHour = Math.min(event.end.getHours() + (event.end.getMinutes() > 0 ? 1 : 0), 24);
                const duration = endHour - startHour;

                eventGrid[eventDay][startHour].push({ event, duration });
            }
        });

        return (
            <div>
                <div className="grid grid-cols-8 gap-1">
                    <div className={`${cellClasses} flex items-center justify-center`}>
                        <div className="font-semibold text-center">Week {weekNumber}</div>
                    </div>
                    {days.map(day => (
                        <div key={day.toISOString()} className={cellClasses}>
                            <div className="font-bold">{day.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                            <div>{day.getDate()}</div>
                        </div>
                    ))}
                    {hours.map(hour => (
                        <React.Fragment key={hour}>
                            <div className={cellClasses + " text-right"}>{`${hour}:00`}</div>
                            {days.map((day, dayIndex) => {
                                const cellDate = new Date(day);
                                cellDate.setHours(hour, 0, 0, 0);
                                const eventsInCell = eventGrid[dayIndex][hour];

                                return (
                                    <div
                                        key={`${day.toISOString()}-${hour}`}
                                        className={`${cellClasses} relative`}
                                        onClick={() => onCellClick && onCellClick(cellDate)}
                                    >
                                        {eventsInCell.map(({ event, duration }, index) => (
                                            <div
                                                key={event.id}
                                                className={cn(
                                                    eventClasses,
                                                    "absolute m-0",
                                                    event.classNames || "bg-blue-100"
                                                )}
                                                style={{
                                                    top: 0,
                                                    left: `${(index * 100) / eventsInCell.length}%`,
                                                    width: `${100 / eventsInCell.length}%`,
                                                    height: `${duration * 100}%`,
                                                    minHeight: '20px',
                                                    overflow: 'hidden',
                                                    zIndex: index + 1
                                                }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onEventClick && onEventClick(event);
                                                }}
                                            >
                                                <div className="font-semibold">{event.title}</div>
                                                <div className="text-xs">
                                                    {formatEventTime(event.start)} - {formatEventTime(event.end)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        );
    }, [currentDate, data, onEventClick, onCellClick]);


    // Render Month View
    const renderMonthView = useCallback(() => {
        const today = new Date();
        const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

        type EventSpan = { event: Event; startOffset: number; duration: number };
        const eventSpans: EventSpan[][] = Array(daysInMonth).fill(null).map(() => []);

        data.forEach(event => {
            const startDate = new Date(event.start);
            const endDate = new Date(event.end);

            if (startDate.getMonth() === currentDate.getMonth() && startDate.getFullYear() === currentDate.getFullYear() ||
                endDate.getMonth() === currentDate.getMonth() && endDate.getFullYear() === currentDate.getFullYear()) {

                const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
                const monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

                const eventStart = startDate < monthStart ? monthStart : startDate;
                const eventEnd = endDate > monthEnd ? monthEnd : endDate;

                const startDay = eventStart.getDate();
                const endDay = eventEnd.getDate();
                const duration = endDay - startDay + 1;
                const startOffset = eventStart.getMonth() === currentDate.getMonth() ? 0 : startDay - 1;

                eventSpans[startDay - 1].push({ event, startOffset, duration });
            }
        });

        const days = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="p-2 h-32"></div>);
        }

        const maxEventsToShow = 2;

        for (let i = 1; i <= daysInMonth; i++) {
            const cellDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            const isToday =
                today.getDate() === i &&
                today.getMonth() === currentDate.getMonth() &&
                today.getFullYear() === currentDate.getFullYear();

            const dayEvents = eventSpans[i - 1];
            const visibleEvents = dayEvents.slice(0, maxEventsToShow);
            const moreEventsCount = dayEvents.length - maxEventsToShow;

            days.push(
                <div
                    key={i}
                    className={cn(cellClasses, "h-32 ", isToday && "bg-blue-100")}
                    onClick={() => onCellClick && onCellClick(cellDate)}
                >
                    <div className={isToday ? 'font-bold' : ''}>{i}</div>
                    {visibleEvents.map(({ event, startOffset, duration }, index) => (
                        <div
                            key={event.id}
                            className={cn(
                                eventClasses,
                                "text-xs font-medium",
                                event.classNames || "bg-blue-200"
                            )}
                            style={{
                                width: `${Math.min(duration * 100, (daysInMonth - i + 1) * 100)}%`,
                                marginLeft: `${startOffset * 100}%`,
                                position: 'relative',
                                zIndex: index + 1
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                onEventClick && onEventClick(event);
                            }}
                        >
                            {event.title}
                        </div>
                    ))}
                    {moreEventsCount > 0 && (
                        <div
                            className="text-xs text-gray-500 cursor-pointer hover:text-gray-700"
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentDate(cellDate);
                                setView('day');
                            }}
                        >
                            +{moreEventsCount} more
                        </div>
                    )}
                </div>
            );
        }

        return (
            <div className="grid grid-cols-7 gap-1">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center font-bold p-2">{day}</div>
                ))}
                {days}
            </div>
        );
    }, [currentDate, data, onEventClick, onCellClick, setView]);


    // Render Year View
    const renderYearView = useCallback(() => {
        const today = new Date();
        const months = Array.from({ length: 12 }, (_, i) => new Date(currentDate.getFullYear(), i, 1));

        return (
            <div className="grid grid-cols-3 gap-4">
                {months.map(month => {
                    const firstDayOfMonth = new Date(month.getFullYear(), month.getMonth(), 1).getDay();
                    const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
                    const days = [];

                    // Add empty cells for days before the first of the month
                    for (let i = 0; i < firstDayOfMonth; i++) {
                        days.push(<div key={`empty-${i}`} className="text-center"></div>);
                    }

                    // Add the days of the month
                    for (let i = 1; i <= daysInMonth; i++) {
                        const cellDate = new Date(month.getFullYear(), month.getMonth(), i);
                        const isToday =
                            today.getDate() === i &&
                            today.getMonth() === month.getMonth() &&
                            today.getFullYear() === month.getFullYear();

                        const hasEvent = data.some(event =>
                            event.start.getFullYear() === month.getFullYear() &&
                            event.start.getMonth() === month.getMonth() &&
                            event.start.getDate() === i
                        );

                        days.push(
                            <div
                                key={i}
                                className={cn(
                                    "text-center cursor-pointer p-1 rounded",
                                    isToday && "bg-blue-100 font-bold dark:bg-blue-800",
                                    hasEvent && "font-semibold"
                                )}
                                onClick={() => onCellClick && onCellClick(cellDate)}
                            >
                                {i}
                                {hasEvent && <div className="w-1 h-1 bg-blue-500 rounded-full mx-auto mt-1"></div>}
                            </div>
                        );
                    }

                    return (
                        <div key={month.toISOString()} className={cellClasses}>
                            <div className="font-medium pb-2 text-center">{month.toLocaleString('default', { month: 'long' })}</div>
                            <div className="grid grid-cols-7 gap-1 text-xs">
                                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                                    <div key={day} className="text-center font-semibold">{day}</div>
                                ))}
                                {days}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }, [currentDate, data, onCellClick]);


    // Render View
    const renderView = useMemo(() => {
        switch (view) {
            case 'day':
                return renderDayView();
            case 'week':
                return renderWeekView();
            case 'month':
                return renderMonthView();
            case 'year':
                return renderYearView();
            default:
                return null;
        }
    }, [view, renderDayView, renderWeekView, renderMonthView, renderYearView]);


    // Change Date
    const changeDate = useCallback((delta: number) => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            switch (view) {
                case 'day':
                    newDate.setDate(newDate.getDate() + delta);
                    break;
                case 'week':
                    newDate.setDate(newDate.getDate() + delta * 7);
                    break;
                case 'month':
                    newDate.setMonth(newDate.getMonth() + delta);
                    break;
                case 'year':
                    newDate.setFullYear(newDate.getFullYear() + delta);
                    break;
            }
            return newDate;
        });
    }, [view]);


    // Go to Today
    const goToToday = useCallback(() => {
        setCurrentDate(new Date());
    }, []);


    // Formatted Date
    const formattedDate = useMemo(() => {
        if(view === 'year') {
            return currentDate.toLocaleString('default', {
                year: 'numeric',
            });
        }
        if(view === 'month') {
            return currentDate.toLocaleString('default', {
                month: 'long',
                year: 'numeric',
            });
        }
        return currentDate.toLocaleString('default', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            ...(view === 'week' && { weekday: 'long' })
        });
    }, [currentDate, view]);



    // Handle Date Select
    const handleDateSelect = (date: Date | undefined) => {
        if (date) {
            setCurrentDate(date);
        }
    };


    // Mounted
    useEffect(() => {
        setMounted(true);
    }, []);


    return (
        <div className="p-4">
            <div className="grid grid-cols-3 mb-4">

                <div className="flex items-center gap-1 ">
                    <Button onClick={() => changeDate(-1)} size={"icon"} variant={"ghost"}><ChevronLeft size={18} /></Button>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[240px] justify-start text-left font-normal",
                                    !currentDate && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {currentDate ? format(currentDate, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={currentDate}
                                onSelect={handleDateSelect}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    <Button onClick={() => changeDate(1)} size={"icon"} variant={"ghost"}><ChevronRight size={18} /></Button>

                    <TooltipItem content={<span>Go to Today</span>}>
                        <Button onClick={goToToday} size={"icon"} variant={"ghost"}><CalendarClock size={18} /></Button>
                    </TooltipItem>
                </div>


                <div className="flex items-center justify-center font-semibold">
                    {mounted ? formattedDate : <span className="invisible">Loading...</span>}
                </div>

                <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-md dark:bg-slate-800">
                    <ExpandButton text="Day" isActive={view === 'day'} onClick={() => setView('day')} icon={<List size={18} />} />
                    <ExpandButton text="Week" isActive={view === 'week'} onClick={() => setView('week')} icon={<Columns2 size={18} />} />
                    <ExpandButton text="Month" isActive={view === 'month'} onClick={() => setView('month')} icon={<Grid3x3 size={18} />} />
                    <ExpandButton text="Year" isActive={view === 'year'} onClick={() => setView('year')} icon={<LayoutGrid size={18} />} />
                </div>

            </div>
            {renderView}
        </div>
    );
};


// Get Week Number
const getWeekNumber = (date: Date) => {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
};

export default DataCalendar;




export function TooltipItem({
 children,
 content,
} : {
    children: React.ReactNode,
    content: React.ReactNode,
}) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    { children }
                </TooltipTrigger>
                <TooltipContent>
                    { content }
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

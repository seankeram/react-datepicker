import moment from "moment";
import React from "react";
import "./style.scss";
import { IYearOption } from "./content/yearly";
type DateEvent = string | {
    start: string;
    end: string;
};
export interface IEvent {
    id: number;
    title: React.ReactNode | string;
    date: DateEvent;
    style?: React.CSSProperties;
    className?: string;
    dotColor?: string;
    disabled?: boolean;
    icon?: React.ReactNode;
}
export interface IEventLogic extends IEvent {
    date: {
        start: string;
        end: string;
    };
    priority?: number;
}
export type IOnDateFunc = (date: string) => {
    className?: string;
};
export interface IProps {
    lang?: "en" | "fa";
    theme?: "blue";
    events: IEvent[];
    style?: React.CSSProperties;
    view?: "Yearly" | "Monthly";
    yearlyOptions?: IYearOption;
    className?: string;
    extra?: React.ReactNode;
    onDay?: IOnDateFunc;
    disabledDate?: (date: moment.Moment) => Boolean;
    onClickEvent?: (item: IEvent) => void;
    onDoubleClickEvent?: (item: IEvent) => void;
    onDropEvent?: (item: IEvent) => void;
    onDateClick?: (date: string) => void;
    onMonthChange?: (start: string, end: string) => void;
    onAddEventClick?: (date: string) => void;
}
declare const Calender: ({ lang, theme, events, onDropEvent, onClickEvent, onDoubleClickEvent, style, onDateClick, onDay, onMonthChange, view, yearlyOptions, className, extra, onAddEventClick, }: IProps) => React.JSX.Element;
export default Calender;

import moment from "moment";
import React from "react";
import { IEvent, IEventLogic, IOnDateFunc } from "./components/calendar";
import { EnumLang, EnumTheme } from "./components/datepicker/enum";
export declare enum modeViewEnum {
    Monthly = "Monthly",
    Yearly = "Yearly"
}
export interface IConfigDatePicker {
    lang: "fa" | "en";
    theme: keyof typeof EnumTheme;
    pick?: "day" | "month" | "year";
    setPick?: (val: "day" | "month" | "year") => void;
    date: moment.Moment;
    setDate?: Function;
    setValue?: Function;
    value?: moment.Moment;
    dayEffects?: {
        title?: string;
        color?: string;
        dotColor?: string;
        day: string;
    }[];
    disabledDate?: (date: moment.Moment) => Boolean;
    events?: IEventLogic[];
    setEvents?: any;
    onClickEvent?: (item: IEvent) => void;
    onDoubleClickEvent?: (item: IEvent) => void;
    onDropEvent?: (item: IEvent) => void;
    onDateClick?: (date: string) => void;
    onMonthChange?: (start: string, end: string) => void;
    onAddEventClick?: (date: string) => void;
    onDay?: IOnDateFunc;
    view?: modeViewEnum;
    eventsGroup: eventsGroupType;
}
export type eventsGroupType = {
    [key: string]: IEvent[];
};
declare const DatepickerContext: React.Context<IConfigDatePicker>;
interface IProps {
    children: React.ReactNode;
    config: {
        lang: keyof typeof EnumLang;
        theme: keyof typeof EnumTheme;
        disabledDate?: (date: moment.Moment) => Boolean;
        dayEffects?: {
            title?: string;
            color?: string;
            dotColor?: string;
            day: string;
        }[];
        events?: IEvent[];
        onClickEvent?: (item: IEvent) => void;
        onDoubleClickEvent?: (item: IEvent) => void;
        onDropEvent?: (item: IEvent) => void;
        onDateClick?: (date: string) => void;
        onMonthChange?: (start: string, end: string) => void;
        onAddEventClick?: (date: string) => void;
        onDay?: IOnDateFunc;
        view?: modeViewEnum;
    };
    input?: any;
    format?: string;
    onChange?: (val?: moment.Moment) => void;
    value?: moment.Moment;
    defaultValue?: moment.Moment;
    closeWhenSelectADay?: boolean;
    setOpen?: Function;
}
declare const DatepickerProvider: ({ children, config, input, format, onChange, value, defaultValue, setOpen, closeWhenSelectADay, }: IProps) => React.JSX.Element;
export { DatepickerProvider, DatepickerContext };

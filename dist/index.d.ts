import moment from 'moment';
import React from 'react';

declare enum EDropdownPositions {
    rightBottom = "right-bottom",
    leftBottom = "left-bottom",
    rightTop = "right-top",
    leftTop = "left-top"
}

declare enum EnumTheme {
    blue = "blue",
    green = "green",
    yellow = "yellow",
    red = "red",
    papular = "papular"
}
declare enum EnumLang {
    fa = "fa",
    en = "en"
}

interface IPropsDatepicker {
    theme?: keyof typeof EnumTheme;
    lang?: keyof typeof EnumLang;
    adjustPosition?: typeof EDropdownPositions | "modal" | "auto";
    input?: JSX.Element;
    format?: string;
    footer?: (moment?: any, setValue?: (val?: moment.Moment) => void) => JSX.Element | JSX.Element[] | string;
    onChange?: (val?: moment.Moment) => void;
    value?: moment.Moment | string;
    defaultValue?: moment.Moment;
    modeTheme?: "dark" | "light";
    dayEffects?: {
        title?: string;
        color?: string;
        dotColor?: string;
        day: string;
    }[];
    disabledDate?: (date: moment.Moment) => Boolean;
    disabled?: boolean;
    loading?: boolean;
    closeWhenSelectADay?: boolean;
    onOpen?: Function;
    spinnerComponent?: JSX.Element | JSX.Element[];
    name?: string;
    allowClear?: boolean;
}
declare const Datepicker: ({ theme, lang, input, format, modeTheme, adjustPosition, closeWhenSelectADay, value: value_, footer, onChange, defaultValue, dayEffects, disabled, disabledDate, loading, onOpen, spinnerComponent, name, allowClear, }: IPropsDatepicker) => React.JSX.Element;

interface IYearOption {
    hideEventsList?: boolean;
    onYearChange?: (start: string, end: string) => void;
}

type DateEvent = string | {
    start: string;
    end: string;
};
interface IEvent {
    id: number;
    title: React.ReactNode | string;
    date: DateEvent;
    style?: React.CSSProperties;
    className?: string;
    dotColor?: string;
    disabled?: boolean;
    icon?: React.ReactNode;
}
type IOnDateFunc = (date: string) => {
    className?: string;
};
interface IProps {
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

export { Calender as Calendar, Datepicker };

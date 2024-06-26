import React from "react";
interface IProps {
    day: string;
    date: moment.Moment;
    onClick?: () => void;
    disabled?: boolean;
    style?: React.CSSProperties;
    onlyView?: boolean;
}
declare const Day: ({ day, date, disabled, onClick, style, onlyView }: IProps) => React.JSX.Element;
export default Day;

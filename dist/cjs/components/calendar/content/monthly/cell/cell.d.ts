import "./style.scss";
import React from "react";
import moment from "moment";
interface IProps {
    date: moment.MomentInput;
    disabled?: boolean;
    onClick?: () => void;
    cellIndexInWeek: number;
}
declare const Cell: ({ date, disabled, onClick, cellIndexInWeek }: IProps) => React.JSX.Element;
export default Cell;

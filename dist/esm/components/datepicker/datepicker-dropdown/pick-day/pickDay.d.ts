import React from "react";
import "./pickDay.scss";
import { Moment } from "moment";
interface IProps {
    onStep: Function;
    onlyView?: boolean;
    customMonth?: Moment;
    onDayClick?: (date: Moment) => void;
}
declare const PickDay: ({ onStep, onlyView, customMonth, onDayClick }: IProps) => React.JSX.Element;
export default PickDay;

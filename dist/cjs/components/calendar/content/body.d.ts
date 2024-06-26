import React from "react";
import "./style.scss";
interface IProps {
    onNextClick?: () => void;
    onPrevClick?: () => void;
    onTodayClick?: () => void;
    children?: JSX.Element[] | JSX.Element;
    header?: React.ReactNode;
    side?: React.ReactNode;
}
declare const Body: ({ children, onNextClick, onPrevClick, header, side, onTodayClick }: IProps) => React.JSX.Element;
export default Body;

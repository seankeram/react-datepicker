import React from "react";
import "./body.scss";
interface IProps {
    onNext?: () => void;
    onPrev?: () => void;
    onPrevDouble?: () => void;
    onNextDouble?: () => void;
    headerText?: string | JSX.Element | JSX.Element[];
    onClick?: () => void;
    children?: JSX.Element[] | JSX.Element;
    noStyle?: boolean;
}
declare const Body: ({ onNext, onPrev, headerText, children, onNextDouble, onPrevDouble, onClick, noStyle, }: IProps) => React.JSX.Element;
interface IProps {
    color?: string;
    width?: string;
    height?: string;
}
export declare const CaretIcon: ({ color, width, height }: IProps) => React.JSX.Element;
export default Body;

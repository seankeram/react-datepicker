import React from "react";
import "./style.scss";
interface IProps {
    children: React.ReactNode;
    className?: string;
}
declare const Table: ({ children, className }: IProps) => React.JSX.Element;
export default Table;

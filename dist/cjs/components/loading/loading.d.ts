import React from "react";
import "./loading.scss";
interface IProps {
    children?: JSX.Element | JSX.Element[] | string;
    spinnerComponent?: JSX.Element | JSX.Element[] | string;
    loading?: boolean;
}
declare const Loading: ({ children, loading, spinnerComponent }: IProps) => React.JSX.Element;
export default Loading;

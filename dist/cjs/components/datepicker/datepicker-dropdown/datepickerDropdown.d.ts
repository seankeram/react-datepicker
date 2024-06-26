import "./datepickerDropdown.scss";
import React from "react";
import { EDropdownPositions } from "./useDropdownRoles";
interface IProps {
    open: boolean;
    footer?: (moment: Function, setValue?: any) => JSX.Element | JSX.Element[] | string;
    loading?: boolean;
    spinnerComponent?: any;
    refMain?: any;
    adjustPosition: typeof EDropdownPositions | "modal" | "auto";
    setOpen: Function;
}
declare const DatepickerDropdown: ({ open, footer, loading, spinnerComponent, refMain, adjustPosition, setOpen, }: IProps) => React.JSX.Element;
export default DatepickerDropdown;

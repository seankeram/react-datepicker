import moment from "moment";
import React from "react";
import { EDropdownPositions } from "./datepicker-dropdown/useDropdownRoles";
import { EnumLang, EnumTheme } from "./enum";
import "./style.scss";
export interface IPropsDatepicker {
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
export default Datepicker;

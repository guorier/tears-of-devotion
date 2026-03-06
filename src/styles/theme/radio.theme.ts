interface GenericObject<T> { [key: string]: T; }
type ObjectString = GenericObject<string>;
interface RadioSizeType {
  sm: string;
  lg: string;
}
export interface RadioStyle {
  label: string;
  base: string;
  // sizes: RadioSize;
  colors: ObjectString;
  type: {
    default: {
      base: string;
      sizes: RadioSizeType;
    };
    line: {
      base: string;
      sizes: RadioSizeType;
    };
  }
}

const disabled = "disabled:cursor-default disabled:text-silver-200 disabled:bg-line-100 disabled:border-line-200 checked:disabled:bg-disabled-chk";
const lineCommon = "relative flex justify-center items-center";
const lineAfter = "after:absolute after:border after:rounded-full";
const lineCheck = "checked:relative checked:bg-natural-900 checked:border-white checked:after:border-natural-900";
const lineDisabled = "disabled:cursor-default disabled:bg-line-100 disabled:border-line-200 checked:disabled:bg-none checked:disabled:bg-line-300 checked:disabled:border-line-100 checked:disabled:after:border-line-300";
const sizeSm = "size-4.5 min-w-4.5 max-w-4.5 min-h-4.5 max-h-4.5"
const sizeLg = "size-5.5 min-w-5.5 max-w-5.5 min-h-5.5 max-h-5.5"

const RadioConfig: RadioStyle = {
  label: "cursor-pointer flex justify-center items-center gap-2 text-sm has-[:disabled]:cursor-default",
  base: `cursor-pointer border bg-white ${disabled} focus:ring-0 focus-visible:ring-0 focus:ring-offset-0 focus-visible:ring-offset-0`,
  type: {
    default: {
      base: `${disabled} checked:disabled:bg-none checked:disabled:bg-white`,
      sizes: {
        sm: `${sizeSm} checked:border-5`,
        lg: `${sizeLg} checked:border-6`,
      },
    },
    line: {
      base: `${lineCommon} ${lineAfter} ${lineCheck} ${lineDisabled} focus:ring-offset-0`,
      sizes: {
        sm: `${sizeSm} checked:border-4 checked:after:size-4.5`,
        lg: `${sizeLg} checked:border-5 checked:after:size-5.5`,
      },
    }
  },
  colors: {
    base: "checked:bg-white border-silver-400 checked:border-natural-900",
    primary: "checked:bg-white border-primary-400 checked:border-primary-900",
    secondary: "checked:bg-white border-secondary-400 checked:border-secondary-900",
    warning: "checked:bg-white border-warning-100 checked:border-warning-100",
    error: "checked:bg-white border-error-100 checked:border-error-100",
    valid: "checked:bg-white border-valid-100 checked:border-valid-100",
  },
};

export default RadioConfig

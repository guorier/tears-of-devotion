interface GenericObject<T> { [key: string]: T; }
type ObjectString = GenericObject<string>;

export interface CheckboxStyle {
   base: string;
   label: string;
   sizes: ObjectString;
   colors: ObjectString;
   border_radius: ObjectString;
}

const CheckConfig: CheckboxStyle = {
   label: "cursor-pointer flex justify-center items-center gap-2 text-sm has-[:disabled]:cursor-default",
   base: "cursor-pointer border bg-white disabled:cursor-default disabled:text-silver-200 disabled:bg-line-100 disabled:border-line-200 checked:disabled:bg-disabled-chk focus:ring-0 focus-visible:ring-0 focus:ring-offset-0 focus-visible:ring-offset-0",
   sizes: {
      sm: "size-4.5 min-w-4.5 max-w-4.5 min-h-4.5 max-h-4.5 checked:bg-[length:12px]",
      lg: "size-5.5 min-w-5.5 max-w-5.5 min-h-5.5 max-h-5.5  checked:bg-[length:16px]",
   },
   border_radius: {
      default: "rounded-none",
      round: "rounded-full",
   },
   colors: {
      base: "text-natural-900 border-line-200",
      primary: "text-primary-900 border-primary-400 ",
      secondary: "text-secondary-900 border-secondary-400",
      warning: "text-warning-100 border-warning-100",
      error: "text-error-100 border-error-100 ",
      valid: "text-valid-100 border-valid-100",
   },
};

export default CheckConfig
import {type VariantProps, cva} from "class-variance-authority"
import * as React from 'react';

import Icons from '@/components/Icons';
import {cn} from '@/lib/utils';

const inputVariants = cva(
  'relative flex items-center px-4 py-0 w-full text-body1 placeholder:text-guide rounded-lg bg-white disabled:bg-black200 disabled:placeholder:text-body2 disabled:border-strokeDefault disabled:text-body1 !focus:outline-none focus:ring-0 focus:ring-transparent focus:border-2 focus:border-point',
  {
    variants: {
      variant: {
        default:'border border-black400',
        side:'border border-black400',
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: 'h-14 bodyL', //56 19-400
        lg: 'h-12 bodyM', //48 17-400
        sm: 'h-10 bodyS', //40 15-400
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface InputProps extends Omit<React.ComponentProps<'input'>, 'size'>,
  VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, size, ...props }, ref) => (
    <input ref={ref} type={type}
      className={cn(inputVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Input.displayName = 'Input';

type PasswordProps = Omit<InputProps, 'ref'> & {
  containerClassName?: string
  iconClassName?: string
}

const Password = React.forwardRef<HTMLInputElement, PasswordProps>((
  {
    className,
    containerClassName,
    iconClassName = 'absolute right-2 top-1/2 size-6 -translate-y-1/2 cursor-pointer',
    ...props
  }, ref) => {

    const [type, setType] = React.useState<'password' | 'text'>('password');
    const onToggle = () => {setType(type === 'password' ? 'text' : 'password');};

    return (
      <div className={cn('relative', containerClassName)}>
        <Input ref={ref} className={cn("w-full", className)} type={type} {...props} />
        {type === 'password' ? (
          <div onClick={onToggle} className={iconClassName}>
            <Icons iName="IconVisibleOff" className="size-6 bg-point" original/>
          </div>
        ) : (
          <div onClick={onToggle} className={iconClassName}>
            <Icons iName="IconVisible" className="size-6" original/>
          </div>
        )}
      </div>
    );
  },
);
Password.displayName = 'Password';

export { Input, Password };

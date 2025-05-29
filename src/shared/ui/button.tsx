import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  color?: 'blue' | 'red' | 'green' | 'yellow' | 'teal' | 'lime' | 'purple';
  isGradient?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  asLink?: false;
}

interface IButtonLinkProps extends LinkProps {
  variant?: 'primary' | 'outline';
  color?: 'blue' | 'red' | 'green' | 'yellow' | 'teal' | 'lime' | 'purple';
  isGradient?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode
  className?: string
  asLink?: true;
}

const colorClasses: Record<string, Record<string, string>> = {
  primary: {
    blue: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300',
    red: 'text-white bg-red-700 hover:bg-red-800 focus:ring-red-300',
    green: 'text-white bg-green-700 hover:bg-green-800 focus:ring-green-300',
    yellow: 'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300',
    teal: 'text-white bg-teal-700 hover:bg-teal-800 focus:ring-teal-300',
    lime: 'text-white bg-lime-700 hover:bg-lime-800 focus:ring-lime-300',
    purple: 'text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300',
  },
  outline: {
    blue: 'text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-blue-300',
    red: 'text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-red-300',
    green: 'text-green-700 border border-green-700 hover:bg-green-700 hover:text-white focus:ring-green-300',
    yellow: 'text-yellow-400 border border-yellow-400 hover:bg-yellow-400 hover:text-white focus:ring-yellow-300',
    teal: 'text-teal-700 border border-teal-700 hover:bg-teal-700 hover:text-white focus:ring-teal-300',
    lime: 'text-lime-700 border border-lime-700 hover:bg-lime-700 hover:text-white focus:ring-lime-300',
    purple: 'text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white focus:ring-purple-300',
  },
};

const gradientClasses: Record<string, string> = {
  blue: 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300',
  red: 'text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-red-300',
  green: 'text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-green-300',
  yellow: 'text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-yellow-300',
  teal: 'text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 hover:bg-gradient-to-br focus:ring-teal-300',
  lime: 'text-white bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700 hover:bg-gradient-to-br focus:ring-lime-300',
  purple: 'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300',
};

const sizeClasses: Record<string, string> = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-2.5',
  xl: 'text-xl px-6 py-3',
};

export function UIButton({
  variant = 'primary',
  color = 'blue',
  isGradient = false,
  size = 'md',
  className = '',
  children,
  ...props
}: IButtonProps | IButtonLinkProps) {
  const baseClasses = 'font-medium rounded-lg focus:outline-none focus:ring-4';
  const variantClass = isGradient
    ? gradientClasses[color]
    : colorClasses[variant][color];
  const sizeClass = sizeClasses[size];
  const btnClassName = `${baseClasses} ${variantClass} ${sizeClass} ${className}`
  if (props.asLink) {
    delete props.asLink
    console.log(props)
    return <Link className={btnClassName} {...props}>{children}</Link>
  }
  props = props as IButtonProps
  return (
    <button
      className={btnClassName}
      {...props}
    >
      {children}
    </button>
  );
};


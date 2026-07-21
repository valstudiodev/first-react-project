import React from "react";
import { Link, LinkProps } from "react-router";


export default function ButtonLink({ to, children, className = '', ...props }: ButtonLinkProps): React.JSX.Element {
  return (
    <Link
      to={to}
      className={`inline-block px-4 py-2 bg-blue-950
        hover:bg-blue-900 hover-base text-white rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </Link >
  )
}

interface ButtonLinkProps extends LinkProps {
  variant?: 'primary' | 'secondary'
}
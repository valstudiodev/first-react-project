import React from 'react';
import { SpinnerProps } from "./SpinnerDefaultTypes";
import './spinner.scss';

export function SpinnerDefault({
  size = 'medium',
  overlay = false,
  label = 'Loading...',
  className = '',
}: SpinnerProps): React.JSX.Element {
  const containerClasses = [
    'spinner-container',
    `spinner-container--${size}`,
    overlay ? 'spinner-container--overlay' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses} role="status" aria-label={label}>
      <div className="spinner-container__circle" />
    </div>
  );
}

// export const Spinner: React.FC<SpinnerProps> = ({
//   size = 'medium',
//   overlay = false,
//   label = 'Loading...',
//   className = '',
// }) => {
//   const containerClasses = [
//     'spinner-container',
//     `spinner-container--${size}`,
//     overlay ? 'spinner-container--overlay' : '',
//     className,
//   ]
//     .filter(Boolean)
//     .join(' ');

//   return (
//     <div className={containerClasses} role="status" aria-label={label}>
//       <div className="spinner-container__circle" />
//     </div>
//   );
// };



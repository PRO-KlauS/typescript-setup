import React, { ReactNode } from 'react';
import ReactTooltip from 'react-tooltip';

interface TooltipProps {
  children: ReactNode;
  id: string;
  place?: 'top' | 'right' | 'bottom' | 'left' | undefined;
}

const ToolTip: React.FC<TooltipProps> = ({ children, id, place }) => {
  return (
    <ReactTooltip id={id} place={place} effect="solid">
      {children}
    </ReactTooltip>
  );
};

export default ToolTip;

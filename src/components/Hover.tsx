import React, { useMemo, useState } from 'react';

interface TSlot {
  hover: boolean;
  listeners: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onFocus: () => void;
    onBlur: () => void;
  };
}

export interface HoverProps {
  children: (slot: TSlot) => React.ReactElement;
}

export const Hover: React.FC<HoverProps> = ({ children }) => {
  const [hover, setHover] = useState(false);

  const listeners = useMemo(
    () => ({
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      onFocus: () => setHover(true),
      onBlur: () => setHover(false),
    }),
    [],
  );

  return children({ hover, listeners });
};

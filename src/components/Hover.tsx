import React, {
  cloneElement,
  isValidElement,
  useMemo,
  useRef,
  useState,
} from 'react';

export interface HoverSlot {
  hover: boolean;
  listeners: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onFocus: () => void;
    onBlur: () => void;
  };
}

export interface HoverProps {
  children: React.ReactNode | ((slot: HoverSlot) => React.ReactElement);
}

export const Hover: React.FC<HoverProps> = ({ children }) => {
  const [hover, setHover] = useState(false);

  const isListenerBinded = useRef(false);

  const listeners = useMemo(
    () => ({
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      onFocus: () => setHover(true),
      onBlur: () => setHover(false),
    }),
    [],
  );

  const resolvedChildren =
    typeof children === 'function'
      ? children({
          hover,
          get listeners() {
            isListenerBinded.current = true;
            return listeners;
          },
        })
      : children;

  if (!isListenerBinded.current) {
    if (
      !isValidElement(resolvedChildren) ||
      (Array.isArray(resolvedChildren) && resolvedChildren.length > 1)
    ) {
      throw new Error("Hover's listeners is not binded!");
    }

    return cloneElement(resolvedChildren, { ...listeners });
  }

  return resolvedChildren;
};

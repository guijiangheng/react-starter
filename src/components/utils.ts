import flip from '@popperjs/core/lib/modifiers/flip';
import offset from '@popperjs/core/lib/modifiers/offset';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import {
  defaultModifiers,
  popperGenerator,
} from '@popperjs/core/lib/popper-lite';

export const noop = () => {};

export const formatValue = (value: number) =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3,
    notation: 'compact',
  }).format(value);

export const hexToRGB = (h: string) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = +`0x${h[1]}${h[1]}`;
    g = +`0x${h[2]}${h[2]}`;
    b = +`0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = +`0x${h[1]}${h[2]}`;
    g = +`0x${h[3]}${h[4]}`;
    b = +`0x${h[5]}${h[6]}`;
  }
  return `${r},${g},${b}`;
};

export const REM = parseFloat(
  getComputedStyle(document.documentElement).fontSize,
);

export const createPopper = popperGenerator({
  defaultModifiers: [...defaultModifiers, flip, offset, preventOverflow],
});

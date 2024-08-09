import { useMemo, useEffect, useState } from 'react';

type Props = {
  minWidth?: number;
  maxWidth?: number;
};

export default function useMediaQuery({ minWidth, maxWidth }: Props) {
  if (!minWidth && !maxWidth) {
    throw new Error(
      'useMediaQuery() hook에 minWidth와 maxWidth 중 하나는 전달해야 합니다.',
    );
  }

  const mediaQueryString = useMemo(() => {
    const minWidthString = minWidth ? `(min-width: ${minWidth}px)` : '';
    const maxWidthString = maxWidth ? `(max-width: ${maxWidth}px)` : '';
    const andString = minWidth && maxWidth ? ' and ' : '';
    return `${minWidthString}${andString}${maxWidthString}`;
  }, [minWidth, maxWidth]);

  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(mediaQueryString).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQueryList = window.matchMedia(mediaQueryString);
    const listener = () =>
      requestAnimationFrame(() => setMatches(mediaQueryList.matches));
    listener();
    mediaQueryList.addEventListener('change', listener);
    return () => mediaQueryList.removeEventListener('change', listener);
  }, [mediaQueryString]);

  return matches;
}

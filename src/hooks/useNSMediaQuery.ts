import useMediaQuery from './useMediaQuery';

export default function useNSMediaQuery() {
  const isDesktop = useMediaQuery({ minWidth: 1210 });
  const isTablet = useMediaQuery({ minWidth: 800, maxWidth: 1209 });
  const isMobile = useMediaQuery({ maxWidth: 799 });
  const isLoading = !isDesktop && !isTablet && !isMobile;

  return { isDesktop, isTablet, isMobile, isLoading };
}

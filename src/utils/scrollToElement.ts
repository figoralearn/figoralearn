import { Lenis } from "lenis";

interface ScrollToElementOptions {
  lenis?: Lenis | null;
  targetId: string;
  headerSelector?: string;
  extraTopPadding?: number;
  duration?: number;
  preventDefault?: boolean;
}

/**
 * Scrolls to a specific element with proper offset calculation for fixed headers
 * @param options Configuration options for scrolling
 * @param options.lenis - Lenis instance for smooth scrolling
 * @param options.targetId - ID of the target element to scroll to
 * @param options.headerSelector - CSS selector for the header element (default: '.header__container')
 * @param options.extraTopPadding - Additional padding to account for (default: 50)
 * @param options.duration - Scroll animation duration in seconds (default: 1.5)
 * @param options.preventDefault - Whether to prevent default link behavior (default: true)
 */
export const scrollToElement = (options: ScrollToElementOptions) => {
  const {
    lenis,
    targetId,
    headerSelector = '.header__container',
    extraTopPadding = 50,
    duration = 1.5,
    preventDefault = true
  } = options;

  return (e?: React.MouseEvent) => {
    if (preventDefault && e) {
      e.preventDefault();
    }

    const target = document.getElementById(targetId);
    if (!target) {
      console.warn(`Element with id "${targetId}" not found`);
      return;
    }

    const headerEl = document.querySelector(headerSelector) as HTMLElement | null;
    const headerHeight = headerEl
      ? headerEl.getBoundingClientRect().height
      : 80;
    
    const offset = -(headerHeight + extraTopPadding);

    if (lenis) {
      lenis.scrollTo(target, {
        offset,
        duration,
      });
    } else {
      // Fallback to native scroll if Lenis is not available
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };
};

/**
 * Convenience function for scrolling to demo section
 * @param lenis - Lenis instance
 * @param extraTopPadding - Additional padding (default: 50)
 */
export const scrollToDemo = (lenis?: Lenis | null, extraTopPadding: number = 50) => {
  return scrollToElement({
    lenis,
    targetId: 'demo',
    extraTopPadding,
    duration: 1.5
  });
};

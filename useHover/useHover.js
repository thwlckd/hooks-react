export const useHover = (useHover) => {
  if (typeof useHover !== "function") {
    return;
  }
  const element = useRef(); // DOM에 ref 지정을 통한 접근. like getElementById()
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", useHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", useHover);
      }
    };
  }, []);
  return element;
};

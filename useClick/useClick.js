const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef(); // DOM에 ref 지정을 통한 접근. like getElementById()
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
    // useEffect return 시기
    // dependancy가 바뀌어서 effect가 달라져야할 때 (이전 effect 청소)
    // 해당 component가 unmount 될 때
  }, []);
};

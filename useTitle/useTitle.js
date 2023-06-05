import { useState } from "react";

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  // useEffect(effect, dependency)
  // componentDidMount, componentWillUpdate, componentDidUnmount, componentWillUnmount
  return setTitle;
};
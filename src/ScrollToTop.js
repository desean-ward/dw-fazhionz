import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  
  useEffect(() => {
    const scroll = () => {
    window.scrollTo(0, 0);
    }

    setTimeout(scroll, 0)

  }, [pathname]);

  return null;

}
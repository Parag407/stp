import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PageLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    setFading(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setFading(true);
      setTimeout(() => setLoading(false), 300);
    }, 400);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [location]);

  if (!loading) return null;

  return (
    <div className={`fixed top-0 left-0 right-0 z-[70] h-1 ${fading ? "animate-loader-fade" : ""}`}>
      <div className="h-full bg-brand-yellow animate-loader-bar shadow-lg shadow-brand-yellow/50"></div>
    </div>
  );
}

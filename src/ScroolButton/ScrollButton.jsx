import { useEffect, useState } from "react";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "80px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: "transparent",
          color: "#fff",
          borderRadius: "50%",
          border: "1px solid #fff",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          fontSize: "16px",
        }}
      >
        ↑
      </button>
    )
  );
};

export default ScrollButton;

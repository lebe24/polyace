import React from 'react'

const Welcome = () => {
    const scrollTo = () => {
        const getStarted = document.getElementById("getStarted");
        getStarted.scrollIntoView({ behavior: "smooth", block: "end" });
    };

    function parallax(event) {
        document.querySelectorAll(".plx").forEach((shift) => {
          const position = shift.getAttribute("value");
          const x = (window.innerWidth - event.pageX * position) / 90;
          const y = (window.innerHeight - event.pageY * position) / 90;
          shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
          shift.style.transition = `transform 0.25s`;
        });
    }

  return (
    <div>Welcome</div>
  )
}

export default Welcome
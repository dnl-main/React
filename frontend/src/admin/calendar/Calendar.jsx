// import React from 'react';
// import './calendar.css';

// const Calendar = () => {
//   return (
//     <div className="calendar">
//       <h1>Calendar</h1>
//     </div>
//   );
// };

// export default Calendar;



import React, { useState, useRef, useEffect } from 'react';

const Calendar = () => {
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);

  const paragraphs = [
    "This is the first paragraph.",
    "This is the second paragraph.",
    "This is the third paragraph.",
    "This is the fourth paragraph.",
    "This is the fifth paragraph.",
    "This is the sixth paragraph.",
  ];

  useEffect(() => {
    // Check if the content overflows
    if (contentRef.current) {
      setIsOverflow(contentRef.current.scrollHeight > contentRef.current.clientHeight);
    }
  }, [showMore]); // Re-check overflow when showMore changes

  const toggleShowMore = () => {
    setShowMore(prev => !prev);
  };

  return (
    <div>
      <div
        ref={contentRef}
        style={{
          width: '300px', // Set a fixed width
          height: '100px', // Set a fixed height
          overflow: 'hidden', // Hide overflow
          border: '1px solid black', // Optional styling
          padding: '10px', // Optional padding
        }}
      >
        {paragraphs.map((text, index) => (
          <p key={index} style={{ display: showMore || index < 3 ? 'block' : 'none' }}>
            {text}
          </p>
        ))}
      </div>
      {isOverflow && !showMore && (
        <button onClick={toggleShowMore}>
          More
        </button>
      )}
      {showMore && (
        <button onClick={toggleShowMore}>
          Show Less
        </button>
      )}
    </div>
  );
};

export default Calendar;
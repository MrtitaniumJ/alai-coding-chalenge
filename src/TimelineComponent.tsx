import React from 'react';

interface TimelineComponentProps {
  elementCount: number;
}

const TimelineComponent: React.FC<TimelineComponentProps> = ({ elementCount }) => {
  const spacing = 150;
  const circleSize = 12;
  const lineHeight = 50;
  const subheadingMargin = 30;

  const createTimelineElements = () => {
    const elements = [];
    
    for (let i = 0; i < elementCount; i++) {
      const isAboveLine = i % 2 === 0;

      elements.push(
        <div key={i} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          textAlign: 'center',
          width: `${spacing}px`,
        }}>
          {/* Subheading */}
          {isAboveLine && (
            <div style={{
              fontWeight: 'bold',
              marginBottom: `${subheadingMargin + lineHeight + 40}px`,
              color: '#333',
              position: 'relative'
            }}>
              Subheading {i + 1}
            </div>
          )}

          {/* Circle and Vertical Line */}
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}>
            <div style={{
              width: `${circleSize}px`,
              height: `${circleSize}px`,
              backgroundColor: '#333',
              borderRadius: '50%',
              position: 'relative',
              top: isAboveLine ? `${lineHeight-120}px` : `${circleSize+58}px`, // Positioning based on above or below
              zIndex: 1,
            }}></div>

            {/* Vertical Line */}
            <div style={{
              width: '2px',
              height: `${lineHeight}px`,
              backgroundColor: '#333',
              position: 'absolute',
              top: isAboveLine ? `-${lineHeight+62}px` : `${circleSize+64}px`, // Positioning based on above or below
            }}></div>
          </div>

          {/* Subheading Below Line */}
          {!isAboveLine && (
            <div style={{
              fontWeight: 'bold',
              marginTop: `${subheadingMargin + lineHeight + 40}px`,
              color: '#333',
            }}>
              Subheading {i + 1}
            </div>
          )}
        </div>
      );
    }

    return elements;
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '50px 0',
      width: `${(elementCount - 1) * spacing + 100}px`,
      position: 'relative',
      margin: '0 auto',
    }}>
      {/* horizontal line */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '0',
        right: '0',
        height: '2px',
        backgroundColor: '#333',
        zIndex: -1,
      }}></div>

      {/* Timeline Elements */}
      {createTimelineElements()}
    </div>
  );
};

export default TimelineComponent;

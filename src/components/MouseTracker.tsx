import React, { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import MouseTrackerStyles from '@/styles/components/MouseTrackerStyles';

// Define the prop types for the MouseTracker component
interface MouseTrackerProps {
  children: ReactNode; // ReactNode allows any valid JSX content
  offset?: { x: number; y: number }; // Optional offset property with default values
}

// Define the MouseTracker functional component with TypeScript types
const MouseTracker: React.FC<MouseTrackerProps> = ({ children, offset = { x: 0, y: 0 } }) => {
  // Create a ref to hold a reference to the tracking element
  const element = useRef<HTMLDivElement>(null);

  // Set up an effect to handle mouse movement
  useEffect(() => {
    // Event handler for mouse movement
    function handler(e: MouseEvent) {
      if (element.current) {
        // Calculate new position based on mouse coordinates and offset
        const x = e.clientX + offset.x,
          y = e.clientY + offset.y;

        // Update the tracking element's style
        element.current.style.transform =  `translate(${x}px, ${y}px)`;
        element.current.style.visibility = 'visible';
      }
    }

    // Attach the event listener when the component mounts
    document.addEventListener('mousemove', handler);

    // Clean up the event listener when the component unmounts
    return () => document.removeEventListener('mousemove', handler);
  }, [offset.x, offset.y]);

  // Use createPortal to render the tracking element outside the normal component tree
  return createPortal(
    <MouseTrackerStyles ref={element}>
      {children}
    </MouseTrackerStyles>,
    document.body
  );
};

export default MouseTracker; // Export the MouseTracker component

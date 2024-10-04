import React, { useEffect, useRef } from 'react';

const StarCanvas = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);

  const numStars = 200; // Number of static stars
  const speed = 0.2; // Speed of star movement

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Function to generate random stars
    const generateStars = () => {
      const stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          dx: -speed, // Move stars to the left
          dy: speed, // Move stars downwards
        });
      }
      starsRef.current = stars; // Store stars in the ref
    };

    // Function to draw stars on the canvas
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

      // Draw static stars
      starsRef.current.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Update star positions
    const updateStars = () => {
      starsRef.current.forEach((star) => {
        star.x += star.dx; // Update x position (left)
        star.y += star.dy; // Update y position (down)

        // Wrap stars around the canvas edges
        if (star.x < 0) star.x = canvas.width;
        if (star.y > canvas.height) star.y = 0; // Reset y position
      });
    };

    // Initialize stars and set the canvas size
    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateStars();
      window.requestAnimationFrame(animate);
    };

    // Animation loop to redraw stars
    const animate = () => {
      updateStars(); // Update star positions
      drawStars(); // Draw stars
      window.requestAnimationFrame(animate); // Keep animating
    };

    init();

    // Clean up on component unmount
    return () => {
      starsRef.current = [];
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 z-0"
      style={{ pointerEvents: 'none' }} // Prevent interactions with the canvas
    />
  );
};

export default StarCanvas;

'use client';

import * as React from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useAnimationControls,
} from 'motion/react';
import { cn } from '../../utils/utils';




function generateStars(count, starColor) {
  const shadows = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 4000) - 2000;
    const y = Math.floor(Math.random() * 4000) - 2000;
    shadows.push(`${x}px ${y}px ${starColor}`);
  }
  return shadows.join(', ');
}

function StarLayer({
  count = 1000,
  size = 1,
  duration = 50,
  starColor = '#fff',
  paused = false,
  className,
  ...props
}) {
  const [boxShadow, setBoxShadow] = React.useState('');
  const controls = useAnimationControls();

  React.useEffect(() => {
    setBoxShadow(generateStars(count, starColor));
  }, [count, starColor]);

  // Start or stop the scroll animation based on visibility
  React.useEffect(() => {
    if (paused) {
      controls.stop();
    } else {
      controls.start({
        y: [null, -2000],
        transition: { repeat: Infinity, duration, ease: 'linear' },
      });
    }
  }, [paused, duration, controls]);

  return (
    <motion.div
      data-slot="star-layer"
      animate={controls}
      className={cn('absolute top-0 left-0 w-full h-[2000px]', className)}
      {...props}
    >
      <div
        className="absolute bg-transparent rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
        }}
      />
      <div
        className="absolute bg-transparent rounded-full top-[2000px]"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
        }}
      />
    </motion.div>
  );
}


function StarsBackground({
  children,
  className,
  factor = 0.05,
  speed = 50,
  transition = { stiffness: 50, damping: 20 },
  starColor = '#fff',
  pointerEvents = false,
  paused = false,
  ...props
}) {
  const offsetX = useMotionValue(1);
  const offsetY = useMotionValue(1);

  const springX = useSpring(offsetX, transition);
  const springY = useSpring(offsetY, transition);

  const handleMouseMove = React.useCallback(
    (e) => {
      // Skip mouse parallax updates when the hero is not visible
      if (paused) return;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const newOffsetX = -(e.clientX - centerX) * factor;
      const newOffsetY = -(e.clientY - centerY) * factor;
      offsetX.set(newOffsetX);
      offsetY.set(newOffsetY);
    },
    [offsetX, offsetY, factor, paused],
  );

  return (
    <div
      data-slot="stars-background"
      className={cn(
        'relative size-full overflow-hidden bg-[radial-gradient(ellipse_at_bottom,#262626_0%,#000_100%)]',
        className,
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className={cn({ 'pointer-events-none': !pointerEvents })}
      >
        <StarLayer
          count={1000}
          size={1}
          duration={speed}
          starColor={starColor}
          paused={paused}
        />
        <StarLayer
          count={400}
          size={2}
          duration={speed * 2}
          starColor={starColor}
          paused={paused}
        />
        <StarLayer
          count={200}
          size={3}
          duration={speed * 3}
          starColor={starColor}
          paused={paused}
        />
      </motion.div>
      {children}
    </div>
  );
}

export {
  StarLayer,
  StarsBackground,

};
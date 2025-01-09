"use client";
import { useState, useEffect } from "react";

interface Sphere {
  x: number;
  y: number;
  size: number;
  blur: number;
  color: string;
}

export default function BgLineEffect() {
  const [spheres, setSpheres] = useState<Sphere[]>([]);

  useEffect(() => {
    const generateSpheres = () => {
      const newSpheres: Sphere[] = [];
      for (let i = 0; i < 164; i++) {
        newSpheres.push({
          x: Math.random() * 100 - 20,
          y: Math.random() * 100 - 5,
          size: Math.random() * 100 + 5,
          blur: Math.random() * 20 + 5,
          color: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
          )}, ${Math.floor(Math.random() * 256)}, 0.3)`, // Generate random RGBA color
        });
      }
      setSpheres(newSpheres);
    };

    generateSpheres();
  }, []);

  return (
    <div className="background-spheres absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {spheres.map((sphere, index) => (
        <div
          key={index}
          style={{
            left: `${sphere.x}vw`,
            top: `${sphere.y}vh`,
            width: `${sphere.size}rem`,
            /* height: `${sphere.size}rem`, */
            filter: `blur(${sphere.blur}px)`,
            backgroundColor: sphere.color,
          }}
        />
      ))}
    </div>
  );
}

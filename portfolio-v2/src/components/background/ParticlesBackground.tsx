import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ParticlesBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
      setWebGLSupported(false);
      return;
    }

    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: canvas,
        powerPreference: "low-power"
      });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      containerRef.current.appendChild(renderer.domElement);

      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 1500;
      const posArray = new Float32Array(particlesCount * 3);
      const colors = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 5;
        posArray[i + 1] = (Math.random() - 0.5) * 5;
        posArray[i + 2] = (Math.random() - 0.5) * 5;

        // Cyan, purple, pink colors
        const colorChoice = Math.random();
        if (colorChoice < 0.33) {
          colors[i] = 0.02; colors[i + 1] = 0.71; colors[i + 2] = 0.83; // cyan
        } else if (colorChoice < 0.66) {
          colors[i] = 0.66; colors[i + 1] = 0.33; colors[i + 2] = 0.97; // purple
        } else {
          colors[i] = 0.93; colors[i + 1] = 0.28; colors[i + 2] = 0.58; // pink
        }
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.008,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      });

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);
      camera.position.z = 2;

      const onMouseMove = (event: MouseEvent) => {
        mousePosition.current = {
          x: (event.clientX / window.innerWidth) * 2 - 1,
          y: -(event.clientY / window.innerHeight) * 2 + 1
        };
      };

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      const animate = () => {
        requestAnimationFrame(animate);
        particlesMesh.rotation.x += 0.0002;
        particlesMesh.rotation.y += 0.0002;
        particlesMesh.rotation.x += mousePosition.current.y * 0.0005;
        particlesMesh.rotation.y += mousePosition.current.x * 0.0005;
        renderer.render(scene, camera);
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', handleResize);
      animate();

      return () => {
        if (containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', handleResize);
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        renderer.dispose();
      };
    } catch (error) {
      console.error('Error initializing WebGL:', error);
      setWebGLSupported(false);
    }
  }, []);

  if (!webGLSupported) {
    return (
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                backgroundColor: ['#06b6d4', '#a855f7', '#ec4899'][Math.floor(Math.random() * 3)],
                animation: `float ${Math.random() * 10 + 5}s linear infinite`
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
};

export default ParticlesBackground;

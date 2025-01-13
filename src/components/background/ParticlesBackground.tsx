import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ParticlesBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      setWebGLSupported(false);
      console.warn('WebGL not supported - falling back to CSS animation');
      return;
    }

    try {
      // Scene setup
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

      // Particles
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 1000; // Reduced count for better performance
      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

      // Material
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: 0x667eea,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      });

      // Mesh
      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);
      camera.position.z = 2;

      // Mouse movement handler
      const onMouseMove = (event: MouseEvent) => {
        mousePosition.current = {
          x: (event.clientX / window.innerWidth) * 2 - 1,
          y: -(event.clientY / window.innerHeight) * 2 + 1
        };
      };

      // Window resize handler
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);

        particlesMesh.rotation.x += 0.0001;
        particlesMesh.rotation.y += 0.0001;

        // Interactive movement based on mouse position
        particlesMesh.rotation.x += mousePosition.current.y * 0.0003;
        particlesMesh.rotation.y += mousePosition.current.x * 0.0003;

        renderer.render(scene, camera);
      };

      // Event listeners
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', handleResize);

      animate();

      // Cleanup
      return () => {
        if (containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', handleResize);
        
        // Dispose of Three.js objects
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        renderer.dispose();
      };
    } catch (error) {
      console.error('Error initializing WebGL:', error);
      setWebGLSupported(false);
    }
  }, []);

  // CSS fallback when WebGL is not supported
  if (!webGLSupported) {
    return (
      <div 
        className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'
        }}
      >
        <div className="absolute inset-0 opacity-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/30"
              style={{
                width: Math.random() * 4 + 'px',
                height: Math.random() * 4 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
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
      style={{ 
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'
      }}
    />
  );
};

export default ParticlesBackground;
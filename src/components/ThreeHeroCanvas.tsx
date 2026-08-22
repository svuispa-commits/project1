import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeHeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 32;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D neural elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Neural Network Nodes (Spheres with gentle glow)
    const nodeCount = 42;
    const nodes: THREE.Vector3[] = [];
    const nodeColors = [
      new THREE.Color(0x0d9488), // Teal 600
      new THREE.Color(0x0284c7), // Sky 600
      new THREE.Color(0x6366f1), // Indigo 500
      new THREE.Color(0x14b8a6), // Teal 500
    ];

    const nodeGeometry = new THREE.SphereGeometry(0.35, 16, 16);
    const nodeMaterial = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      emissive: 0x0284c7,
      emissiveIntensity: 0.4,
      roughness: 0.2,
      metalness: 0.8,
    });

    const instancedNodes = new THREE.InstancedMesh(nodeGeometry, nodeMaterial, nodeCount);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < nodeCount; i++) {
      const radius = 10 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = (radius * Math.sin(phi) * Math.sin(theta)) * 0.7;
      const z = (radius * Math.cos(phi)) * 0.7;

      const pos = new THREE.Vector3(x, y, z);
      nodes.push(pos);

      dummy.position.copy(pos);
      const scale = 0.6 + Math.random() * 0.8;
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      instancedNodes.setMatrixAt(i, dummy.matrix);

      const color = nodeColors[i % nodeColors.length];
      instancedNodes.setColorAt(i, color);
    }
    instancedNodes.instanceMatrix.needsUpdate = true;
    if (instancedNodes.instanceColor) instancedNodes.instanceColor.needsUpdate = true;
    mainGroup.add(instancedNodes);

    // 2. Synaptic Neural Connections (Lines between nearby nodes)
    const linePositions: number[] = [];
    const lineColors: number[] = [];

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < 7.5) {
          linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z);
          linePositions.push(nodes[j].x, nodes[j].y, nodes[j].z);

          // Alpha fade by distance
          const alpha = 1 - dist / 7.5;
          const c1 = new THREE.Color(0x38bdf8);
          lineColors.push(c1.r, c1.g, c1.b, alpha * 0.45);
          lineColors.push(c1.r, c1.g, c1.b, alpha * 0.45);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.35,
      blending: THREE.NormalBlending,
    });
    const neuralLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    mainGroup.add(neuralLines);

    // 3. Central Crystalline Code Polyhedron (Icosahedron wireframe core)
    const coreGeometry = new THREE.IcosahedronGeometry(4.8, 1);
    const coreWireframe = new THREE.WireframeGeometry(coreGeometry);
    const coreLine = new THREE.LineSegments(coreWireframe);
    (coreLine.material as THREE.Material).transparent = true;
    (coreLine.material as THREE.Material).opacity = 0.28;
    (coreLine.material as THREE.LineBasicMaterial).color = new THREE.Color(0x0d9488);
    mainGroup.add(coreLine);

    // 4. Subtle Outer Floating Ring / Geometric Orbit
    const ringGeo = new THREE.TorusGeometry(8.5, 0.04, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.22,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    ring.rotation.y = Math.PI / 6;
    mainGroup.add(ring);

    // 5. Floating Dust / Star Particles
    const dustCount = 80;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPos[i] = (Math.random() - 0.5) * 50;
      dustPos[i + 1] = (Math.random() - 0.5) * 35;
      dustPos[i + 2] = (Math.random() - 0.5) * 30;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      size: 0.25,
      color: 0x14b8a6,
      transparent: true,
      opacity: 0.5,
    });
    const dustPoints = new THREE.Points(dustGeo, dustMat);
    scene.add(dustPoints);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x0d9488, 2, 50);
    pointLight1.position.set(15, 15, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0284c7, 1.8, 50);
    pointLight2.position.set(-15, -10, 15);
    scene.add(pointLight2);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = -(event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width === 0 || height === 0) return;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow interpolation
      targetX += (mouseX * 0.45 - targetX) * 0.05;
      targetY += (mouseY * 0.45 - targetY) * 0.05;

      // Base rotation
      mainGroup.rotation.y = elapsedTime * 0.06 + targetX;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.04) * 0.15 + targetY * 0.5;

      coreLine.rotation.x = elapsedTime * 0.12;
      coreLine.rotation.y = elapsedTime * 0.18;

      ring.rotation.z = elapsedTime * 0.08;

      dustPoints.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose resources
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      coreGeometry.dispose();
      coreWireframe.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

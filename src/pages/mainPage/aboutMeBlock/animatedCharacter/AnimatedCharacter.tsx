import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage } from '@react-three/drei';

// Компонент для загрузки модели
const HumanModel = () => {
  const gltf = useGLTF('models/human1.glb');
  return <primitive object={gltf.scene} scale={1} />;
};

export const AnimatedCharacter = () => {
  return (
    <Canvas style={{ width: '100%', height: '500px', pointerEvents: 'auto', touchAction: 'none' }}>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={1}
        enableDamping
      />

      <Stage environment="city" intensity={0.6} shadows={false}>
        <HumanModel />
      </Stage>
    </Canvas>
  );
};

import { useGLTF } from "@react-three/drei";

const GitText: React.FC = () => {
  const { scene } = useGLTF("/assets/models/git/git.glb");

  return <primitive object={scene} />;
};

export default GitText;

const LightController: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 150, 0]} intensity={2.5} decay={0} />
      <spotLight
        position={[100, -30, 150]}
        angle={Math.PI / 3}
        intensity={1}
        decay={0}
      />
      <spotLight
        position={[-100, -30, 150]}
        angle={Math.PI / 3}
        intensity={1}
        decay={0}
      />
    </>
  );
};

export default LightController;

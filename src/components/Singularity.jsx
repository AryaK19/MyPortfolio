const Singularity = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Smoke particles */}
      {[...Array(16)].map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-6 rounded-full opacity-0"
          style={{
            background:
              "radial-gradient(circle, rgb(0, 0, 0) 0%, rgb(244, 238, 255) 0%, rgb(74, 0, 77) 50%, transparent 100%)",
            animation: `smoke ${1.5 + Math.random()}s infinite`,
            animationDelay: `${i * 0.2}s`,
            transform: `rotate(${i * 22.5}deg) translateY(-8px) scale(0.7)`,
            transformOrigin: "center center",
          }}
        />
      ))}

<style jsx>{`
  @keyframes smoke {
    0% {
      transform: rotate(${props => props.index * 22.5}deg)
        translateY(-8px) scale(0.5);
      opacity: 0;
    }
    25% {
      transform: rotate(${props => (props.index * 22.5) + 45}deg)
        translateY(-12px) scale(1);
      opacity: 0.4;
    }
    75% {
      transform: rotate(${props => (props.index * 22.5) + 90}deg)
        translateY(-16px) scale(1.5);
      opacity: 0.2;
    }
    100% {
      transform: rotate(${props => (props.index * 22.5) + 180}deg)
        translateY(-20px) scale(2);
      opacity: 0;
    }
  }
`}</style>

      {/* Main singularity point */}
      <div
        className="absolute w-4 h-4 bg-gradient-radial from-white via-purple-200 to-red-300 
        rounded-full animate-[spin_1s_linear_infinite] shadow-lg shadow-purple-500/50 animate-gitter"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-2 h-2 bg-white rounded-full blur-[1px] animate-pulse"
        ></div>
      </div>


    </div>
  );
};

export default Singularity;

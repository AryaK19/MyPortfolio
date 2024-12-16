const TimelineLine = () => (
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1">
      <div className="h-full bg-gradient-to-b from-purple-500 via-pink-500 to-transparent animate-pulse"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
    </div>
  );
  
  export default TimelineLine;
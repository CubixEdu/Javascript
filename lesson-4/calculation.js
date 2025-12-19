export const calculateTotalDuration = (durations) => 
    durations.reduce((acc, duration) => acc += duration, 0)
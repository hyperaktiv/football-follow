import React, { useState, useEffect } from 'react'

export default function useDebounce(value, delay) {
   delay = delay || 500;

   const [debouncedValue, setDebounecdValue] = useState(value);

   useEffect(() => {
      const handler = setTimeout(() => {
         setDebounecdValue(value);
      }, delay);
      return () => {
         clearTimeout(handler);
      }
   }, [value, delay]);

   return debouncedValue;
}
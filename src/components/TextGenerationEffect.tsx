import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TextGenerationEffectProps {
  words: string[];
  className?: string;
  cursorClassName?: string;
}

export const TextGenerationEffect: React.FC<TextGenerationEffectProps> = ({
  words,
  className = '',
  cursorClassName = 'bg-primary-500', 
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = useRef<number>(50); // ms per character
  const deletingSpeed = useRef<number>(30); // ms per character
  const delayAfterWord = useRef<number>(1500); // ms to wait after completing a word

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isTyping && !isDeleting) {
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, typingSpeed.current);
        
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayAfterWord.current);
        
        return () => clearTimeout(timeout);
      }
    } else if (isDeleting) {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, deletingSpeed.current);
        
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setIsTyping(true);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }
  }, [currentText, currentWordIndex, isDeleting, isTyping, words]);

  return (
    <div className="flex items-center">
      <motion.div
        className={`font-mono text-lg sm:text-xl md:text-2xl ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {currentText}
      </motion.div>
      <motion.div
        className={`ml-1 h-8 w-[2px] sm:h-10 sm:w-[3px] ${cursorClassName}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
}; 
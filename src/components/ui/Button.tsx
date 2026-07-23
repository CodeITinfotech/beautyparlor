'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  isLoading?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#C58A73] to-[#D6B25E] text-white hover:shadow-lg hover:shadow-[#C58A73]/30 hover:-translate-y-0.5',
    secondary: 'bg-[#F8E8EA] text-[#C58A73] hover:bg-[#C58A73] hover:text-white',
    outline: 'border-2 border-[#C58A73] text-[#C58A73] hover:bg-[#C58A73] hover:text-white',
    ghost: 'text-[#C58A73] hover:bg-[#F8E8EA]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        isLoading && 'opacity-70 cursor-not-allowed',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="spinner mr-2" />
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
}

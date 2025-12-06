import React from 'react'
import Link from 'next/link'

interface CyberpunkButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'href'> {
  children: React.ReactNode
  variant?: 'default' | 'non-bold-text'
  href?: string
  target?: string
  rel?: string
}

export function CyberpunkButton({ 
  children, 
  variant = 'default',
  className = '',
  disabled,
  href,
  target,
  rel,
  ...props 
}: CyberpunkButtonProps) {

  // const textColor = variant === 'green' ? 'text-neon-green' : 'text-white'
  const textColor = 'text-white'
  const isNonBoldText = variant === 'non-bold-text'
  const fontWeight = isNonBoldText ? '' : 'font-semibold'
  
  const buttonClasses = `group relative flex items-center justify-center text-base rounded-xl 
    px-4 py-2 ${fontWeight} ${textColor} transition-all 
    ${disabled ? 'cyberpunk-button-muted opacity-50 cursor-not-allowed' : 'cyberpunk-button'} ${className}`
  
  // If href is provided, render as Link (for internal) or anchor (for external)
  if (href) {
    const isInternalLink = href.startsWith('#') || href.startsWith('/')
    
    if (isInternalLink && !href.startsWith('http')) {
      return (
        <div className="relative inline-flex items-center justify-center group">
          <Link
            href={href}
            className={buttonClasses}
            {...(target ? { target, rel } : {})}
          >
            <span className="flex items-center justify-center">
              {children}
            </span>
          </Link>
        </div>
      )
    } else {
      return (
        <div className="relative inline-flex items-center justify-center group">
          <a
            href={href}
            className={buttonClasses}
            {...(target ? { target, rel } : {})}
          >
            <span className="flex items-center justify-center">
              {children}
            </span>
          </a>
        </div>
      )
    }
  }
  
  return (
    <div className="relative inline-flex items-center justify-center group">      
      <button
        className={buttonClasses}
        disabled={disabled}
        {...props}
      >
        <span className="flex items-center justify-center">
          {children}
        </span>
      </button>
    </div>
  )
}


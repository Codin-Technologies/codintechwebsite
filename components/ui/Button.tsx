import Link from 'next/link';
import { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'hero' | 'heroOutline';
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5';

  const variants = {
    primary:
      'bg-black text-white hover:bg-indigo-600 hover:shadow-lg',
    secondary:
      'bg-white text-black border-2 border-gray-200 hover:border-black hover:shadow-md',
    outline:
      'bg-transparent text-black border-2 border-black hover:bg-black hover:text-white',
    hero:
      'bg-black text-white hover:bg-indigo-600 hover:shadow-2xl px-8 py-4 rounded-xl text-lg',
    heroOutline:
      'bg-transparent text-black border-2 border-black hover:bg-black hover:text-white px-8 py-4 rounded-xl text-lg',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}


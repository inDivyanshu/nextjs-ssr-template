// SharedImage: Centralized Next.js Image wrapper for consistent usage across the app
// Follows enterprise rules: type safety, props validation, and Tailwind integration

'use client';
import Image, { ImageProps } from 'next/image';
import React from 'react';

export interface SharedImageProps extends Omit<ImageProps, 'ref'> {
  alt: string;
  className?: string;
  rounded?: boolean; // utility for rounded corners
}

/**
 * SharedImage provides a consistent, accessible way to render images using next/image.
 * - Adds Tailwind support for rounded corners and custom classes
 * - Forces alt text for accessibility compliance
 * - Extend as needed for skeletons, placeholders, etc.
 */
export const SharedImage: React.FC<SharedImageProps> = ({
  alt,
  className = '',
  rounded = false,
  ...props
}) => {
  return (
    <Image
      alt={alt}
      className={
        `${className} ${rounded ? 'rounded-lg' : ''}`.trim()
      }
      {...props}
    />
  );
};

export default SharedImage;

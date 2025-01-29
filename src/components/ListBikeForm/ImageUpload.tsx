import React from 'react';

interface ImageUploadProps {
  onImageSelect: (url: string) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // For demo purposes, we'll use a placeholder image
      onImageSelect('https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&h=600&fit=crop');
    }
  };

  return (
    <input
      type="file"
      className="sr-only"
      accept="image/*"
      onChange={handleChange}
    />
  );
};
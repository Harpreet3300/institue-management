import cloudinary from '@/src/lib/cloudinary.js'; // Adjust path if needed
import { promises as fs } from 'fs';

/**
 * Upload a single image to Cloudinary
 * @param {string} filePath - Local file path
 * @param {Object} options - Cloudinary upload options
 * @returns {Promise<Object>} Upload result
 */
export const uploadImage = async (filePath, options = {}) => {
  try {
    const defaultOptions = {
      folder: 'uploads',           // Change as needed
      use_filename: true,
      unique_filename: true,
      overwrite: false,
      resource_type: 'image',       // auto, image, video, raw
      transformation: [
        { width: 1200, crop: 'limit' },  // Example: limit size
        { quality: 'auto' },
        { size: '5MB'}
      ]
    };

    const result = await cloudinary.uploader.upload(filePath, {
      ...defaultOptions,
      ...options
    });

    console.log('✅ Upload successful:', result.secure_url);
    return result;
  } catch (error) {
    console.error('❌ Cloudinary Upload Error:', error.message);
    throw error;
  }
};

/**
 * Upload multiple images
 * @param {Array<string>} filePaths - Array of local file paths
 * @returns {Promise<Array>} Array of upload results
 */
export const uploadMultipleImages = async (filePaths) => {
  try {
    const uploadPromises = filePaths.map(filePath => uploadImage(filePath));
    const results = await Promise.all(uploadPromises);
    return results;
  } catch (error) {
    console.error('❌ Multiple Upload Error:', error.message);
    throw error;
  }
};

/**
 * Delete an image from Cloudinary
 * @param {string} publicId - Public ID of the image
 */
export const deleteImage = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log('🗑️ Image deleted:', result);
    return result;
  } catch (error) {
    console.error('❌ Delete Error:', error.message);
    throw error;
  }
};

export default {
  uploadImage,
  uploadMultipleImages,
  deleteImage
};
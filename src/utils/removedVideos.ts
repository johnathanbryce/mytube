const STORAGE_KEY = 'mytube_removed_videos';

/**
 * Get the set of removed video IDs from localStorage
 */
export const getRemovedVideos = (): Set<string> => {
  if (typeof window === 'undefined') return new Set();

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return new Set(stored ? JSON.parse(stored) : []);
  } catch (error) {
    console.error('Error reading removed videos from localStorage:', error);
    return new Set();
  }
};

/**
 * Add a video ID to the removed videos list
 */
export const addRemovedVideo = (videoId: string): void => {
  if (typeof window === 'undefined') return;

  try {
    const removed = getRemovedVideos();
    removed.add(videoId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...removed]));
  } catch (error) {
    console.error('Error adding removed video to localStorage:', error);
  }
};

/**
 * Remove a video ID from the removed videos list (restore it)
 */
export const removeRemovedVideo = (videoId: string): void => {
  if (typeof window === 'undefined') return;

  try {
    const removed = getRemovedVideos();
    removed.delete(videoId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...removed]));
  } catch (error) {
    console.error('Error removing video from localStorage:', error);
  }
};

/**
 * Clear all removed videos (restore all)
 */
export const clearRemovedVideos = (): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing removed videos from localStorage:', error);
  }
};

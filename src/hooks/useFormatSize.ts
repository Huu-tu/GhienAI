export const useFormatSize = () => {
  const formatSize = (bytes: string | number | undefined) => {
    if (!bytes) return "0 B";

    // Convert string → number
    const numBytes = typeof bytes === "string" ? parseInt(bytes, 10) : bytes;

    if (isNaN(numBytes)) return "0 B";

    const units = ["B", "KB", "MB", "GB", "TB"];
    let i = 0;
    let size = numBytes;

    while (size >= 1024 && i < units.length - 1) {
      size /= 1024;
      i++;
    }

    // Xóa .00 nếu không cần
    const formatted = parseFloat(size.toFixed(2));

    return `${formatted} ${units[i]}`;
  };

  return { formatSize };
};

import dayjs from "dayjs";

export const useFormatDate = () => {
  const formatDate = (dateStr: string | undefined) => {
    if (!dateStr) return "";

    // Fix chuỗi ngày lỗi: "Z4" → "Z"
    const cleaned = dateStr.endsWith("Z4")
      ? dateStr.slice(0, -1)
      : dateStr;

    const d = dayjs(cleaned);

    if (!d.isValid()) return "";

    return d.format("DD/MM/YYYY");
  };

  return { formatDate };
};

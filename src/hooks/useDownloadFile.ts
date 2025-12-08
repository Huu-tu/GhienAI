import type { DownloadFile } from 'types'

export const useDownloadFile = () => {
  const download = ({ url, filename }: DownloadFile) => {
    if (!url || !filename) {
      console.error("Missing file URL or filename");
      return;
    }

    const fullUrl = `${import.meta.env.VITE_BASE_API_URL}/file/${url}`;
    console.log(fullUrl)
    const a = window.document.createElement("a");
    a.href = fullUrl;
    a.download = filename;
    window.document.body.appendChild(a);
    a.click();
    window.document.body.removeChild(a);
    console.log('dsa')
  };

  return { download };
};

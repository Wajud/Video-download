const videoAddress = document.getElementById("url");
const downloadButton = document.getElementById("download-btn");

downloadButton.addEventListener("click", DownloadVideo);

async function DownloadVideo() {
  try {
    const response = await fetch(videoAddress.value);
    const downloadFile = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(downloadFile);
    link.download = new Date().getTime().toString();
    link.click();
  } catch (err) {
    console.error("unable to download, it could be:", err);
  }
}

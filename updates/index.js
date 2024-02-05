// Example update data
const updates = [
    { 
        file: "バージョン 0.8.3 (最新版)",
        downloadLink: "https://drive.usercontent.google.com/download?id=1UAblWVP5YvFJRilX83zZn9ks0QmVq3h-&export=download&authuser=2",
        updateLink: "./info/0.8.3.html" 
    },
];

// Function to create update elements
function createUpdateElement(update) {
    const updateItem = document.createElement("div");
    updateItem.classList.add("download-item");

    const icon = document.createElement("img");
    icon.src = "file-icon.png";
    icon.alt = "File Icon";
    updateItem.appendChild(icon);

    const info = document.createElement("div");

    const title = document.createElement("h2");
    title.textContent = update.file;
    info.appendChild(title);

    const downloadLink = document.createElement("a");
    downloadLink.href = update.downloadLink;
    downloadLink.classList.add("download-link");
    downloadLink.textContent = "ダウンロード (3GB)";
    info.appendChild(downloadLink);

    const updateLink = document.createElement("a");
    updateLink.href = update.updateLink;
    updateLink.classList.add("update-link");
    updateLink.textContent = "アップデート内容";
    info.appendChild(updateLink);

    updateItem.appendChild(info);

    return updateItem;
}

// Function to initialize updates
function initUpdates() {
    const updateContainer = document.getElementById("update-container");
    updates.forEach(update => {
        const updateElement = createUpdateElement(update);
        updateContainer.appendChild(updateElement);
    });
}

// Initialize updates when the page loads
window.onload = initUpdates;

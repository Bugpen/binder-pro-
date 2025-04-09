// Helper functions
function closePopup() {
  document.getElementById("uploadPopup").style.display = "none";
}

function showYouTubeFields() {
  document.getElementById("youtubeFields").style.display = "block";
}

function uploadYouTubeVideo(section) {
  const videoId = document.getElementById("youtubeId").value;
  if (videoId) {
    const videoData = { id: videoId };
    const storageKey = section === 'entertainment' ? 'entertainmentVideos' : 'sermonVideos';
    let videos = JSON.parse(localStorage.getItem(storageKey)) || [];
    videos.push(videoData);
    localStorage.setItem(storageKey, JSON.stringify(videos));

    renderUploadedVideos(section);
    closePopup();
  } else {
    alert("Please enter a YouTube video ID.");
  }
}

function renderUploadedVideos(section) {
  const storageKey = section === 'entertainment' ? 'entertainmentVideos' : 'sermonVideos';
  const galleryClass = section === 'entertainment' ? '.image-gallery' : '.video-grid';
  const gallery = document.querySelector(galleryClass);
  if (!gallery) return;

  const videos = JSON.parse(localStorage.getItem(storageKey)) || [];

  videos.forEach(video => {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${video.id}`;
    iframe.allowFullscreen = true;
    iframe.style.width = "100%";
    iframe.style.height = "315px";
    iframe.style.marginTop = "15px";
    gallery.appendChild(iframe);
  });
}

// Event Listeners

// Home


document.getElementById("homeBtn").addEventListener("click", function () {
  const content = document.getElementById("content-area");
  content.innerHTML = `
    <h2>About Us</h2>
    <p>
      The Church of God 7th Day observes and practices the divine scriptures
      as contained in the Holy book. This article gives an account of how
      the Church Of God Seventh-day in Kenya was born. The church in Kenya
      was established following the missionary work initiated by Andrew N.
      Dugger, through his sending of Elder Shoemaker in 1970. We received the
      true gospel of the Kingdom from Jerusalem as indicated in Isaiah 2:2,3.
    </p>
    <p>
      Through unity and clear knowledge of sound doctrines, it was easier to
      take the message to almost all corners of Kenya. We continue to preach
      through Bible tracts and organize open-air meetings. Some of the
      believers made self...
    </p>
  `;
});

// Sermons

document.getElementById("sermonsBtn").addEventListener("click", function () {
  const content = document.getElementById("content-area");
  content.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <h2>Sermons LIVE</h2>
      <button id="uploadTrigger" style="margin-left: auto;">⬆️ Upload</button>
    </div>
    <div class="video-grid"></div>
    <div id="uploadPopup" class="popup" style="display: none;">
      <div class="popup-content">
        <h3>Upload to Sermons</h3>
        <p>Do you want to upload a YouTube video?</p>
        <button onclick="showYouTubeFields()">Yes</button>
        <button onclick="closePopup()">No</button>

        <div id="youtubeFields" style="display: none; margin-top: 15px;">
          <label>YouTube Video ID:</label>
          <input type="text" id="youtubeId" placeholder="Enter YouTube ID" />
          <button style="margin-top:10px;" onclick="uploadYouTubeVideo('sermons')">Upload</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById("uploadTrigger").addEventListener("click", function () {
    document.getElementById("uploadPopup").style.display = "block";
  });
  renderUploadedVideos('sermons');
});

// Entertainment

document.getElementById("entertainmentBtn").addEventListener("click", function () {
  const content = document.getElementById("content-area");
  content.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <h2>🎬 Entertainment</h2>
      <button id="uploadTrigger" style="margin-left: auto;">⬆️ Upload</button>
    </div>
    <p>Enjoy our collection of entertaining moments, concerts, and highlights from past events.</p>
    <div class="image-gallery">
      <img src="https://via.placeholder.com/300x200?text=Concert+1" alt="Concert 1">
      <img src="https://via.placeholder.com/300x200?text=Youth+Camp" alt="Youth Camp">
      <img src="https://via.placeholder.com/300x200?text=Drama+Show" alt="Drama Show">
      <img src="https://via.placeholder.com/300x200?text=Talent+Show" alt="Talent Show">
    </div>
    <div id="uploadPopup" class="popup" style="display: none;">
      <div class="popup-content">
        <h3>Upload to Entertainment</h3>
        <p>Do you want to upload a YouTube video?</p>
        <button onclick="showYouTubeFields()">Yes</button>
        <button onclick="closePopup()">No</button>

        <div id="youtubeFields" style="display: none; margin-top: 15px;">
          <label>YouTube Video ID:</label>
          <input type="text" id="youtubeId" placeholder="Enter YouTube ID" />
          <button style="margin-top:10px;" onclick="uploadYouTubeVideo('entertainment')">Upload</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById("uploadTrigger").addEventListener("click", function () {
    document.getElementById("uploadPopup").style.display = "block";
  });
  renderUploadedVideos('entertainment');
});
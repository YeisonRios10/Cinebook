
//inicio popup cards
function showPopup(card) {
    const popup = card.querySelector('.popup');
    popup.style.right = '0';
    popup.style.display = 'block';
}

function hidePopup(card) {
    const popup = card.querySelector('.popup');
    popup.style.right = '-350px'; // Oculta la ventana emergente al lado izquierdo
    popup.style.display = 'none';
}

//fin popup cards

//abrir modal trailer
function openVideoModal(videoUrl) {
    var videoIframe = document.getElementById('videoIframe');
    videoIframe.src = videoUrl;
    var videoModal = document.getElementById('videoModal');
    videoModal.style.display = 'block';
}

function closeVideoModal() {
    var videoIframe = document.getElementById('videoIframe');
    videoIframe.src = '';
    var videoModal = document.getElementById('videoModal');
    videoModal.style.display = 'none';
}
//cerrar modal trailer




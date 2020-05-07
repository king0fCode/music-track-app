function tableShow () {
    // let tableData = document.querySelector('#DataTable')
    // tableData.removeAttribute('hidden')
  
    // let tableHide = document.querySelector('.container')

    // tableHide.style.display = 'none'
    const url = 'https://api.deezer.com/search/?q='



    if (document.getElementById('trackSearchInput').value.length == 0) {
        errors = true
        let msg = 'No Track entered'
        fadeOutError(msg)
        console.log('No Track input entered')
    } else {
        let trackInput = document.getElementById('trackSearchInput').value
    }
    


    console.log('track Search');



}




var onWindowLoaded = () => {
    console.log('window loaded')
  
    let onBtnClickSong = document.querySelector("#searchAudio");
    onBtnClickSong.addEventListener("click",tableShow);
  

  }
  
  window.addEventListener('load', onWindowLoaded)
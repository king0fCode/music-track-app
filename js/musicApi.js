function fetchMusic () {
  const url = 'https://api.deezer.com/search/?q='
  const columnKey = 'TRACK'
  let searchString = document.getElementById('trackSearchInput').value

  let urlSortOption = `&order=${columnKey}`
  let searchTerm = `${url + searchString + urlSortOption}&output=jsonp`
  console.log(searchTerm)
  let responseQuery = fetch(searchTerm) // Call the fetch function passing the url of the API as a parameter
    .then(response => {
      if (response.ok) {
          return response.json()
          console.log('ok')
      } else {
        console.log('false')
        return false
      }

      // Your code for handling the data you get from the API
    })
    .catch(function (err) {
      // This is where you run code if the server returns any errors
      console.log('error')

      return false
    })
    console.log(responseQuery)
    return responseQuery;
   

}

function tableShow () {
  // let tableData = document.querySelector('#DataTable')
  // tableData.removeAttribute('hidden')

  // let tableHide = document.querySelector('.container')

  // tableHide.style.display = 'none'

  if (document.getElementById('trackSearchInput').value.length == 0) {
    errors = true
    let msg = 'No Track entered'
    fadeOutError(msg)
    console.log('No Track input entered')
    var noTrackDiv = document.getElementById('no-track-div')
    noTrackDiv.style.display = 'block'
  } else {
    var resultDiv = document.getElementById('trackResults')
    resultDiv.style.display = 'block'
    resultDiv.style.marginTop = '200px'

    var noTrackDiv = document.getElementById('no-track-div')
    noTrackDiv.style.display = 'none'

    let resultsResponse = fetchMusic()
    console.log(resultsResponse)
  }

  console.log('track Search')
}

var onWindowLoaded = () => {
  console.log('window loaded')

  let onBtnClickSong = document.querySelector('#searchAudio')
  onBtnClickSong.addEventListener('click', tableShow)
}

window.addEventListener('load', onWindowLoaded)

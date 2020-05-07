const fetchMusic = async function () {
  const url = 'https://api.deezer.com/search/?q='
  const columnKey = 'TRACK'
  let searchString = document.getElementById('trackSearchInput').value

  let urlSortOption = `&order=${columnKey}`
  let searchTerm = `${url + searchString + urlSortOption}&output=json`
  console.log(searchTerm)

  function handleErrors (response) {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response
  }

  let responseQuery = fetch(searchTerm)
    .then(handleErrors)
    .then(function (response) {
      return response.json()
      console.log('ok')
    })
    .catch(function (error) {
      console.log('error')
    })
  return responseQuery
  console.log(responseQuery)
}

async function tableShow () {
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

    let resultsResponse = await fetchMusic()
    console.log(resultsResponse)
    resultsResponse.data.forEach(obj => {
      Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key} ${value}`)
      })
      console.log('-------------------')
    })
  }

  console.log('track Search')
}

var onWindowLoaded = () => {
  console.log('window loaded')

  let onBtnClickSong = document.querySelector('#searchAudio')
  onBtnClickSong.addEventListener('click', tableShow)
}

window.addEventListener('load', onWindowLoaded)

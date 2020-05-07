const resultData = function () {
  let htmldiv = `<div class="rt-tr-group" role="rowgroup">
    <div class="rt-tr -even" role="row">
        <div class="rt-td" role="gridcell" style="flex: 100 0 auto; width: 100px;">
            <div class="Data-reveal" style="animation-fill-mode: both; animation-duration: 1000ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1; animation-name: Data-reveal-491590191380387-2;">
                <img src="https://cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/250x250-000000-80-0-0.jpg" class="" style="width: 100px; height: 100px;">
            </div>
        </div>
        <div class="rt-td" role="gridcell" style="flex: 100 0 auto; width: 100px;">
            <div class="Data-reveal" style="animation-fill-mode: both; animation-duration: 1000ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1; animation-name: Data-reveal-491590191380387-3;">
                Not Afraid
            </div>
        </div>
        <div class="rt-td" role="gridcell" style="flex: 100 0 auto; width: 100px;">
            <div class="Data-reveal" style="animation-fill-mode: both; animation-duration: 1000ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1; animation-name: Data-reveal-491590191380387-3;">
                Eminem
            </div>
        </div>
        <div class="rt-td" role="gridcell" style="flex: 100 0 auto; width: 100px;">
            <div class="Data-reveal" style="animation-fill-mode: both; animation-duration: 1000ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1; animation-name: Data-reveal-491590191380387-3;">
                248 seconds
            </div>
        </div>
    </div>
</div>`
}

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

    let resultTable = document.getElementById('resultTable')
    let resultArr = {}
      resultArr['data'] = []
      resultArr['data']['title'] = []
      resultArr['data']['artist'] = []
      resultArr['data']['img'] = []
      let c = 0;
    resultsResponse.data.forEach((element) => {
       console.log(`${element}`)

        resultArr['data']['title'][c] += element.title;
        resultArr['data']['artist'][c] += element.artist.name;
        resultArr['data']['img'][c] += element.artist.picture_small;
     
        c++;
 
    })
    console.log(resultArr)
  }

 
}

var onWindowLoaded = () => {
  console.log('window loaded')

  let onBtnClickSong = document.querySelector('#searchAudio')
  onBtnClickSong.addEventListener('click', tableShow)
}

window.addEventListener('load', onWindowLoaded)

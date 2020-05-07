

function scrollTop () {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

validateColor = color => {
  let colorRegExp = new RegExp(
    /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/gim
  )

  let matchResult = color.match(colorRegExp)

  let isValid = matchResult == null ? false : true

  // this function returns a <boolean> value (i.e. returns true when the specified color is valid and false when color is invalid)
  return isValid
}

function fadeOutError (msg) {
  scrollTop()
  document.getElementById('errorMsg').innerHTML = 'Error : ' + msg
  var x = document.getElementById('error-div')
  x.style.display = 'block'

  var fadeTarget = document.getElementById('error-div')
  fadeTarget.style.opacity = 1
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.2
      x.style.display = 'block'
    } else {
      clearInterval(fadeEffect)
      x.style.display = 'none'
    }
  }, 800)
}

function ColorSet () {
  console.log('inside function colorset')
  let errors = false
  let colorChoice = false
  let rdbcolor = false

  if (document.querySelector('input[name="rdbchoice"]:checked')) {
    colorChoice = document.querySelector('input[name="rdbchoice"]:checked')
      .value
    console.log(colorChoice)
  } else {
    errors = true
    let msg = 'No Color Choice selected'
    fadeOutError(msg)
    console.log('inside loop')
  }
  if (document.getElementById('ColorChoice').value.length == 0) {
    errors = true
    let msg = 'No Color Value Entered'
    fadeOutError(msg)
    console.log('No color input')
  } else {
    // validate the color a valid one is provided

    let colorCode = document.getElementById('ColorChoice').value
    let isValidColor = validateColor(colorCode)
    console.log(isValidColor)
    // end validate color call
    if (
      isValidColor === false ||
      isValidColor === undefined ||
      isValidColor === null
    ) {
      errors = true
      let msg = 'No valid Color code value entered'
      fadeOutError(msg)
      console.log('No valid Color code value entered')
    }

    if (!errors) {
      // set dashboard color;
      if (colorChoice == 'RGB' || colorChoice == 'HEX') {
        console.log('colorChoice')
        let themeColorTab = document.getElementById('dashboardColor')
        let colorTitle = document.getElementById('colorTitle')
        let trackSearch = document.getElementById('trackSearch')
        themeColorTab.style.color = colorCode

        colorTitle.style.mixBlendMode = 'difference'
        trackSearch.style.mixBlendMode = 'difference'
        themeColorTab.style.backgroundColor = colorCode

        // document.documentElement.style.setProperty('navbar-inverse', 'rgb(116, 23, 23)');
      } else {
        let msg = 'Error on selecting color choice'
        fadeOutError(msg)
      }
      // end set dashboard colors
    }
  }
}

var onWindowLoaded = () => {
  console.log('window loaded')

  // let onBtnClickSong = document.querySelector("#SongButton");
  // onBtnClickSong.addEventListener("click",tableShow);

  let onBtnClickColor = document.querySelector('#ColorButton')
  onBtnClickColor.addEventListener('click', ColorSet)
}

window.addEventListener('load', onWindowLoaded)

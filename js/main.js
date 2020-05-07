function tableShow () {
  let tableData = document.querySelector('#DataTable')
  tableData.removeAttribute('hidden')

  let tableHide = document.querySelector('.container')
  tableHide.style.display = 'none'
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

  var rdbcolor = document.getElementsByName('rdbchoice')
  var colorChoice = document.getElementById('ColorChoice').value

  if (document.querySelector('input[name="rdbchoice"]:checked')) {
    let colorChoice = document.querySelector('input[name="rdbchoice"]:checked')
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
      if (colorChoice === 'RGB') {
      } else if (colorChoice === 'HEX') {
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

  // set error div to hide at initial loading

  // let onBtnClickSong = document.querySelector("#SongButton");
  // onBtnClickSong.addEventListener("click",tableShow);

  let onBtnClickColor = document.querySelector('#ColorButton')
  onBtnClickColor.addEventListener('click', ColorSet)
}

window.addEventListener('load', onWindowLoaded)

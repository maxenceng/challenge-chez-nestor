/*
 * Delegate events using selector
 * (always from DOCUMENT and during CAPTURE phase)
 */
function delegate(eventName, selector, fn) {
  document.addEventListener(eventName, (e) => {
    $closest = $(e.target).closest(selector)
    if ( $closest.length ) {
      fn(e, $closest)
    }

  // Use capture phase
  }, true)
}

/**
 * Adds the 'Copy to clipboard' option
 * @param {Object} event
 * @param {Object} closest
 */
const addElem = (event, closest) => {
  // Without the setTimeout to wait for React values,
  // the pop-over div is empty and we are not able to add the option
  setTimeout(() => {
    const selector = $('.pop-over-list')
    selector.append(`
      <li>
        <a href="#" class="highlight-icon copy">Copy to clipboard</a>
      </li>
    `)
  }, 1)
}

/**
 * Checks if the element passed to it is an email or not
 * @param  {string}  elem
 * @return {Boolean}
 */
const isEmail = (elem) => {
  return elem.includes('@')
}

/**
 * Copies all the emails in the page to the clipboard
 * @param  {Object} event
 * @param  {Object} closest
 */
const copyToClipboard = (event, closest) => {
  const emailList = []
  $('.list-card-title').each((i, obj) => {
    const tempArr = obj.innerText.split(' ')
    emailList.push(tempArr.find(isEmail))
  })
  const textarea = $('<textarea />')
  textarea.text(emailList.join('; '))
  $('body').append(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
}

delegate('click', '.list-header-extras', addElem)
delegate('click', '.copy', copyToClipboard)

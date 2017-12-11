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
 *
 * @param {[type]} event
 * @param {[type]} closest
 */
const addElem = (event, closest) => {
  console.log(closest)
  setTimeout(() => {
    const selector = $('.pop-over-list')
    selector.append(`
      <li>
        <a href="#" class="highlight-icon copy">Copy to clipboard</a>
      </li>
    `)
  }, 1)
}

const copyToClipboard = (event, closest) => {
  console.log(event, closest)
  const test = $(event.target).closest('.list')
  console.log($('.copy').parent())
}

const test = (event, closest) => {
  console.log(event, closest)
  console.log(closest.attr('.list-header'))
}

delegate('click', '.list-header-extras', addElem)
delegate('click', '.copy', copyToClipboard)

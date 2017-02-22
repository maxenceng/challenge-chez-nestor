/*
 * Delegate events using selector
 * (always from DOCUMENT and during CAPTURE phase)
 */
function delegate(eventName, selector, fn) {
  document.addEventListener(eventName, (e) => {
    $closest = $(e.target).closest(selector);
    if ( $closest.length ) {
      fn(e, $closest);
    }

  // Use capture phase
  }, true);
}

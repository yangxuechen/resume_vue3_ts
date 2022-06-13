import getElementPosition from './getElementPosition';

var isHidden = function isHidden(element) {
  return element.offsetParent === null;
};

export default function inViewport(element, container, customOffset) {
  if (isHidden(element)) {
    return false;
  }

  var top;
  var bottom;
  var left;
  var right;

  if (typeof container === 'undefined' || container === window) {
    top = window.pageYOffset;
    left = window.pageXOffset;
    bottom = top + window.innerHeight;
    right = left + window.innerWidth;
  } else {
    var containerPosition = getElementPosition(container);
    top = containerPosition.top;
    left = containerPosition.left;
    bottom = top + container.offsetHeight;
    right = left + container.offsetWidth;
  }

  var elementPosition = getElementPosition(element);
  return top <= elementPosition.top + element.offsetHeight + customOffset.top && bottom >= elementPosition.top - customOffset.bottom && left <= elementPosition.left + element.offsetWidth + customOffset.left && right >= elementPosition.left - customOffset.right;
}
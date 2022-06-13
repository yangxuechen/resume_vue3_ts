export function goStartMonth(time) {
  return time.clone().startOf('month');
}
export function goEndMonth(time) {
  return time.clone().endOf('month');
}
export function goTime(time, direction, unit) {
  return time.clone().add(direction, unit);
}
export function includesTime() {
  var timeList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var time = arguments.length > 1 ? arguments[1] : undefined;
  var unit = arguments.length > 2 ? arguments[2] : undefined;
  return timeList.some(function (t) {
    return t.isSame(time, unit);
  });
}
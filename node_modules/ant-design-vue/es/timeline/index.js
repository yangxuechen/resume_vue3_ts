import Timeline from './Timeline';
import TimelineItem from './TimelineItem';
Timeline.Item = TimelineItem;
/* istanbul ignore next */

Timeline.install = function (app) {
  app.component(Timeline.name, Timeline);
  app.component(TimelineItem.name, TimelineItem);
  return app;
};

export { TimelineItem };
export default Timeline;
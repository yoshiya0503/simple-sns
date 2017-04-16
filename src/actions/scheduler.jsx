/**
 * @fileoverview Scheduler
 * @name Scheduler.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

const start = scheduler => (
  {
    type: 'START_SCHEDULER',
    isScheduled: scheduler,
  }
);

const stop = () => (
  {
    type: 'STOP_SCHEDULER',
    iScheduled: false,
  }
);

export const startScheduler = (interval = 1000, callback) => (
  (dispatch) => {
    const scheduler = setInterval(
      () => {
        callback();
      },
      interval,
    );
    dispatch(start(scheduler));
  }
);

export const stopScheduler = () => (
  (dispatch) => {
    clearInterval();
  }
);

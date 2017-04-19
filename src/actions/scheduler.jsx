/**
 * @fileoverview Scheduler
 * @name Scheduler.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

const start = scheduler => (
  {
    type: 'START_SCHEDULER',
    scheduler,
  }
);

const stop = scheduler => (
  {
    type: 'STOP_SCHEDULER',
    scheduler,
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

export const stopScheduler = scheduler => (
  (dispatch) => {
    clearInterval(scheduler);
    dispatch(stop(null));
  }
);

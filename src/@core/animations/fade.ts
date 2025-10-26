import {animate, state, style, transition, trigger} from '@angular/animations';

const fadeIn = trigger('fadeIn',
  [
    state('void',
      style({
        opacity: 0,
      }),
    ),

    state('*',
      style({
        opacity: 1,
      }),
    ),

    // Prevent the transition if the store is false
    transition('void => false', []),

    // Transition
    transition('void => *', animate('{{timings}}'),
      {
        params: {
          timings: `250ms cubic-bezier(0.0, 0.0, 0.2, 1)`,
        },
      },
    ),
  ],
);

const fadeOut = trigger('fadeOut',
  [
    state('*',
      style({
        opacity: 1,
      }),
    ),

    state('void',
      style({
        opacity: 0,
      }),
    ),

    // Prevent the transition if the store is false
    transition('false => void', []),

    // Transition
    transition('* => void', animate('{{timings}}'),
      {
        params: {
          timings: `250ms cubic-bezier(0.4, 0.0, 1, 1)`,
        },
      },
    ),
  ],
);

export {fadeIn, fadeOut};

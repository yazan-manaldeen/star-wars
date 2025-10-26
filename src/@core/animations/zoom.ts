import {animate, state, style, transition, trigger} from '@angular/animations';

const zoomIn = trigger('zoomIn',
  [

    state('void',
      style({
        opacity: 0,
        transform: 'scale(0)',
      }),
    ),

    state('*',
      style({
        opacity: 1,
        transform: 'scale(1)',
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

const zoomOut = trigger('zoomOut',
  [

    state('*',
      style({
        opacity: 1,
        transform: 'scale(1)',
      }),
    ),

    state('void',
      style({
        opacity: 0,
        transform: 'scale(0)',
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

export {zoomIn, zoomOut};


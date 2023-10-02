//imports various animation-related functions and classes 
import { trigger, state, style, animate, transition } from '@angular/animations';

// define an animation trigger called 'slideAnimation' that will be used to animate elements within an Angular component.
export const slideAnimation = trigger('slideAnimation', [
  
  //defines a state 'void.' The 'void' state is a special state in Angular animations that 
  //view - represents the initial state of an element before it enters the viewstate('void', style({ transform: 'translateX(100%)' })),
   // sets the 'transform' property means the element will be initially translated 100% to the right (off the screen). 
  state('void', style({ transform: 'translateX(100%)' })),

 //means the element will be translated 100% to the left (off the screen) when it is in the 'inactive' state.
  state('inactive', style({ transform: 'translateX(-100%)' })),
  
  // means the element will not be translated horizontally and will remain in its current position when it is in the 'active' state.
  state('active', style({ transform: 'translateX(0)' })),
  
  // Define transition from any state to 'active'
  transition('* => active', animate('500ms ease-in')),
  
  // Define transition from 'active' to any state
  transition('active => *', animate('500ms ease-out')),
]);

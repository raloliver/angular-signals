import { CaseInterface } from '../../interfaces/case.interface';

export const MOCKED_CASES: CaseInterface[] = [
  {
    case: 'What does the OnPush change detection strategy do?',
    options: [
      'Disables change detection completely',
      'Forces change detection on every browser event',
      'Runs change detection twice per cycle',
    ],
    choice:
      'Skips checking a component unless its inputs, events, or async pipes change',
  },
  {
    case: 'Which RxJS operator cancels the previous inner Observable when a new value arrives?',
    options: ['mergeMap', 'concatMap', 'exhaustMap'],
    choice: 'switchMap',
  },
  {
    case: 'What can happen if you forget to unsubscribe from an Observable in Angular?',
    options: [
      'The application will fail to compile',
      'The component will not render',
      'HTTP requests will be blocked',
    ],
    choice: 'A memory leak, since the subscription outlives the component',
  },
  {
    case: 'What is Dependency Injection in Angular?',
    options: [
      'A way to style components dynamically',
      'A method for handling routing transitions',
      'A technique to bundle files for production',
    ],
    choice:
      'A pattern where a class receives its dependencies from an external injector',
  },
  {
    case: 'Why should dependency injection logic stay in the constructor rather than ngOnInit?',
    options: [
      'The constructor runs after ngOnInit',
      'Angular does not allow injection inside ngOnInit',
      'ngOnInit does not exist in Angular components',
    ],
    choice:
      'The constructor is meant strictly for DI; inputs are not yet set at that point',
  },
  {
    case: 'How do Observables differ from Promises?',
    options: [
      'Promises can emit multiple values, Observables cannot',
      'Observables execute immediately on creation like Promises',
      'Promises support cancellation, Observables do not',
    ],
    choice:
      'Observables are lazy, cancellable, and can emit multiple values over time',
  },
  {
    case: 'What is the main difference between AOT and JIT compilation?',
    options: [
      'JIT compiles at build time, AOT compiles in the browser',
      'AOT is only used in development mode',
      'JIT produces smaller bundles than AOT',
    ],
    choice:
      'AOT compiles templates during the build step; JIT compiles them in the browser',
  },
  {
    case: 'How do you read the current value of an Angular Signal?',
    options: ['signal.value', 'signal.get()', 'await signal'],
    choice: 'By calling it as a function, e.g. count()',
  },
  {
    case: 'What is the main benefit of lazy loading in Angular?',
    options: [
      'It removes the need for a router',
      'It disables change detection for unused routes',
      'It compiles templates faster',
    ],
    choice:
      'It loads feature code only when needed, reducing initial bundle size',
  },
  {
    case: 'Which of these is a structural directive?',
    options: ['ngClass', 'ngStyle', 'appHighlight'],
    choice: '*ngIf (or the modern @if control flow)',
  },
];

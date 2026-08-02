import { CaseInterface } from '../../interfaces/case.interface';

export const MOCKED_CASES_ANGULAR: CaseInterface[] = [
  {
    case: 'What is the main purpose of a TypeScript interface?',
    options: [
      'To compile TypeScript into JavaScript',
      'To handle asynchronous operations',
      'To style HTML elements',
    ],
    choice: 'To define the shape/contract of an object',
  },
  {
    case: 'Which of these is NOT a valid way to type an array in TypeScript?',
    options: ['number[]', 'Array<number>', 'array(number)'],
    choice: 'array(number) is not valid syntax',
  },
  {
    case: 'What does type assertion do in TypeScript?',
    options: [
      'Converts a value at runtime to another type',
      'Throws an error if the type is wrong',
      'Automatically infers the correct type',
    ],
    choice:
      'Tells the compiler to treat a value as a specific type (compile-time only)',
  },
  {
    case: 'What does the "void" type represent in TypeScript?',
    options: [
      'A value that can be any type',
      'An empty array',
      'A value that must be null',
    ],
    choice: 'The absence of a return value from a function',
  },
  {
    case: 'How does "unknown" differ from "any" in TypeScript?',
    options: [
      'unknown disables type checking entirely',
      'unknown can only be used with numbers',
      'unknown is identical to any',
    ],
    choice: 'unknown requires type narrowing before it can be used',
  },
  {
    case: 'What is the purpose of tsconfig.json?',
    options: [
      'It stores runtime environment variables',
      'It defines Angular routing configuration',
      'It stores npm package versions',
    ],
    choice: 'It configures how the TypeScript compiler builds the project',
  },
  {
    case: 'What does the "?." (elvis/optional chaining) operator do?',
    options: [
      'Forces a property to exist',
      'Converts a value to a string',
      'Throws an error if a property is undefined',
    ],
    choice: 'Safely accesses nested properties, short-circuiting to undefined',
  },
  {
    case: 'Why is using "any" considered bad practice in TypeScript?',
    options: [
      'It makes the code run slower',
      'It is not supported in Angular',
      'It requires extra build configuration',
    ],
    choice: 'It disables type checking and hides potential bugs',
  },
  {
    case: 'What is an enum in TypeScript used for?',
    options: [
      'To define asynchronous functions',
      'To create HTML templates',
      'To handle HTTP requests',
    ],
    choice: 'To define a named set of related constant values',
  },
  {
    case: 'When should you use a custom "type" alias instead of an interface?',
    options: [
      'Never, interfaces should always be used',
      'Only for class definitions',
      'Only inside Angular components',
    ],
    choice: 'When modeling unions, tuples, or intersections',
  },
  {
    case: 'What is the main benefit of generics in TypeScript?',
    options: [
      'They remove the need for type checking',
      'They only work with arrays',
      'They convert code to JavaScript automatically',
    ],
    choice: 'They allow reusable, type-safe code across different types',
  },
  {
    case: 'What is RxJS mainly used for?',
    options: [
      'Styling Angular components',
      'Compiling TypeScript to JavaScript',
      'Routing between Angular pages',
    ],
    choice: 'Reactive programming with asynchronous data streams (Observables)',
  },
  {
    case: 'How does RxJS "map" differ from JavaScript Array "map"?',
    options: [
      'They are exactly the same',
      'RxJS map works only on arrays',
      'Array map is asynchronous, RxJS map is synchronous',
    ],
    choice: 'RxJS map transforms values emitted over time from an Observable',
  },
  {
    case: 'What does the RxJS "filter" operator do?',
    options: [
      'Combines multiple Observables into one',
      'Cancels an active Observable',
      'Converts an Observable into a Promise',
    ],
    choice: 'Only forwards emitted values that match a given condition',
  },
  {
    case: 'Which RxJS operator is used to handle errors in a stream?',
    options: ['switchMap', 'combineLatest', 'debounceTime'],
    choice: 'catchError',
  },
  {
    case: 'What does "combineLatest" do in RxJS?',
    options: [
      'Runs Observables one after another',
      'Cancels all but the newest Observable',
      'Converts multiple Observables into a single value once',
    ],
    choice:
      'Emits the latest values from multiple Observables whenever any one emits',
  },
  {
    case: 'What is the key difference between Subject and BehaviorSubject?',
    options: [
      'Subject can only emit once',
      'BehaviorSubject cannot be subscribed to',
      'Subject stores previous values automatically',
    ],
    choice:
      'BehaviorSubject requires an initial value and replays the latest one to new subscribers',
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
    case: 'What is the difference between cold and hot Observables?',
    options: [
      'Cold Observables never complete',
      'Hot Observables always start from the first value',
      'Cold Observables can only be used with HttpClient',
    ],
    choice:
      'Cold Observables run independently per subscriber; hot Observables share one execution',
  },
  {
    case: 'Which RxJS operator cancels the previous inner Observable when a new value arrives?',
    options: ['mergeMap', 'concatMap', 'exhaustMap'],
    choice: 'switchMap',
  },
  {
    case: 'What does SPA stand for in web development?',
    options: [
      'Server Page Application',
      'Static Page Architecture',
      'Structured Page Assembly',
    ],
    choice: 'Single Page Application',
  },
  {
    case: 'Which statement about Angular vs React is accurate?',
    options: [
      'React is a full framework, Angular is just a UI library',
      'Angular has no built-in routing or forms support',
      'React requires TypeScript by default',
    ],
    choice:
      'Angular is a full framework with built-in DI, routing, and forms; React is a UI library',
  },
  {
    case: 'Where does an Angular application typically start bootstrapping?',
    options: ['app.component.ts', 'index.html directly', 'angular.json'],
    choice: 'main.ts',
  },
  {
    case: 'What is the standard way to pass data from a parent to a child component?',
    options: ['@Output()', 'ViewChild', 'A router parameter'],
    choice: '@Input()',
  },
  {
    case: 'Which of these is NOT a type of data binding in Angular?',
    options: ['Property binding', 'Event binding', 'Two-way binding'],
    choice: 'Static binding (not a real Angular binding type)',
  },
  {
    case: 'What decorator is used to mark a class as an injectable Angular service?',
    options: ['@Component()', '@NgModule()', '@Input()'],
    choice: '@Injectable()',
  },
  {
    case: 'Which Angular module/service is used to make HTTP requests?',
    options: ['Router', 'FormBuilder', 'ChangeDetectorRef'],
    choice: 'HttpClient',
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
    case: 'What directive renders the component matching the active route?',
    options: ['*ngIf', 'ngTemplateOutlet', 'ngSwitch'],
    choice: 'router-outlet',
  },
  {
    case: "Which lifecycle hook runs once after the component's inputs are first set?",
    options: ['ngDoCheck', 'ngAfterViewInit', 'ngOnDestroy'],
    choice: 'ngOnInit',
  },
  {
    case: 'What is the difference between @ViewChild and @ViewChildren?',
    options: [
      'ViewChild works only with directives, ViewChildren only with components',
      'ViewChildren returns a single element reference',
      'ViewChild can only be used in services',
    ],
    choice:
      'ViewChild returns a single element reference, ViewChildren returns a QueryList',
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
    case: 'What can happen if you forget to unsubscribe from an Observable in Angular?',
    options: [
      'The application will fail to compile',
      'The component will not render',
      'HTTP requests will be blocked',
    ],
    choice: 'A memory leak, since the subscription outlives the component',
  },
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
    case: 'How do you safely handle a possibly-null value from the async pipe in a template?',
    options: [
      'Use the "as any" cast',
      'Wrap it in a try/catch block',
      'Disable strict mode in tsconfig.json',
    ],
    choice: 'Use optional chaining (?.) or *ngIf="value$ | async as value"',
  },
  {
    case: 'What is the purpose of ng-content in Angular?',
    options: [
      'To lazy-load a route',
      'To define a reusable template block',
      'To create a structural directive',
    ],
    choice:
      "To project content passed from a parent into a component's template",
  },
  {
    case: 'When should Angular animations be preferred over plain CSS animations?',
    options: [
      'Always, CSS animations are deprecated',
      'Never, CSS should always be used instead',
      'Only for page routing transitions',
    ],
    choice:
      'When the animation state needs to be driven by component logic/data',
  },
  {
    case: 'What does the "as" keyword do in an Angular template expression?',
    options: [
      'Casts a value permanently to another type',
      'Creates a new Observable',
      'Imports a module into the template',
    ],
    choice:
      "Creates a local template reference variable from an expression's result",
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
    case: 'What distinguishes a Component from a Directive in Angular?',
    options: [
      'Directives can only be used in NgModules',
      'Components cannot use dependency injection',
      'Directives always require a template',
    ],
    choice: 'A Component is a Directive with its own attached template',
  },
  {
    case: 'Which of these is a structural directive?',
    options: ['ngClass', 'ngStyle', 'appHighlight'],
    choice: '*ngIf (or the modern @if control flow)',
  },
  {
    case: 'How do built-in Angular pipes transform displayed data?',
    options: [
      'By mutating the original component property',
      'By modifying the DOM directly with JavaScript',
      'By re-running ngOnInit',
    ],
    choice: 'Via a transform() method, applied with the | syntax in templates',
  },
  {
    case: 'Why is calling a function directly in an Angular template considered bad practice?',
    options: [
      'Functions cannot access component properties',
      'It is not supported in Angular 13+',
      'It prevents the use of pipes',
    ],
    choice:
      'It re-executes on every change detection cycle, hurting performance',
  },
  {
    case: 'What is Angular Ivy?',
    options: [
      'A state management library',
      'A CLI command for generating components',
      'The legacy compiler replaced in Angular 9',
    ],
    choice: "Angular's rendering engine/compiler, default since v9",
  },
  {
    case: 'What is the main purpose of an HTTP interceptor in Angular?',
    options: [
      'To define component routes',
      'To style HTTP error pages',
      'To lazy-load feature modules',
    ],
    choice:
      'To centralize cross-cutting HTTP logic like auth headers or error handling',
  },
  {
    case: 'What does "ng generate component" rely on to scaffold files?',
    options: ['NgRx effects', 'RxJS operators', 'HTTP interceptors'],
    choice: 'Angular CLI schematics',
  },
  {
    case: 'What is the purpose of a route guard like CanActivate?',
    options: [
      "To style the active route's component",
      'To lazy-load a module automatically',
      'To bind route parameters to inputs',
    ],
    choice: 'To allow, deny, or redirect navigation before a route activates',
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
    case: 'What is the purpose of the static forRoot() method on an NgModule?',
    options: [
      'To lazy-load the module automatically',
      'To generate a new component inside the module',
      'To disable the module in production',
    ],
    choice:
      'To provide configuration/providers when importing the module at the root level',
  },
  {
    case: 'What does Server-Side Rendering (SSR) do in Angular?',
    options: [
      'It disables client-side JavaScript entirely',
      'It replaces the Angular Router with a server router',
      'It compiles TypeScript into WebAssembly',
    ],
    choice:
      'It pre-renders the initial HTML on the server before hydrating it client-side',
  },
  {
    case: 'When would you run code outside NgZone in Angular?',
    options: [
      'When making an HTTP request',
      'When binding a form control',
      'When navigating between routes',
    ],
    choice:
      "For frequent operations (timers, polling) that shouldn't trigger change detection",
  },
  {
    case: 'What is the main difference between Reactive and Template-driven forms?',
    options: [
      'Template-driven forms are defined in the component class',
      'Reactive forms cannot handle validation',
      'Template-driven forms scale better for complex forms',
    ],
    choice:
      'Reactive forms define control logic in the component class, offering more control',
  },
  {
    case: 'How can you fix the "property has no initializer" error on an @Input()?',
    options: [
      'Remove the @Input() decorator',
      'Wrap the component in NgZone',
      'Add the property to the constructor only',
    ],
    choice:
      'Use a definite assignment assertion (!), a default value, or make it optional (?)',
  },
  {
    case: 'What is NgRx primarily used for?',
    options: [
      'Making HTTP requests',
      'Styling Angular components',
      'Compiling Angular applications',
    ],
    choice: 'Redux-inspired centralized state management built on RxJS',
  },
  {
    case: 'What is the benefit of using the inject() function over constructor injection?',
    options: [
      'It disables dependency injection scoping',
      'It only works inside NgModules',
      'It replaces the need for @Injectable()',
    ],
    choice:
      'It works outside constructors (guards, resolvers, field initializers) with less boilerplate',
  },
  {
    case: 'What defines a standalone component in Angular?',
    options: [
      'It cannot use dependency injection',
      'It must be declared inside an NgModule',
      'It has no template',
    ],
    choice:
      'It sets standalone: true and imports its own dependencies directly',
  },
  {
    case: 'How do you read the current value of an Angular Signal?',
    options: ['signal.value', 'signal.get()', 'await signal'],
    choice: 'By calling it as a function, e.g. count()',
  },
];

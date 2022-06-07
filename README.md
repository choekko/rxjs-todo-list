## TODO-LIST with Rx.js 
🗣 _It is a todo-list app implemented with redux-observable._
> https://rxjs-todo-list.netlify.app/
<br/>

### 1. Preview
![rxjs-todo-list-preview](https://user-images.githubusercontent.com/67793530/172352857-985f9db9-058e-4939-84a9-67a226012a23.gif)


<br/>

### 2. Start on Local
```
% git clone https://github.com/choekko/rxjs-todo-list.git
% cd rxjs-todo-list
% yarn install
% yarn start
```
<br/>

### 3. How to Use
```
1. Select task status.
2. Enter task.
3. Click 'SAVE' button to save task.
4. To change status of the created task, drag and drop the task into other space.
5. To delete the task, click 'DELETE' button.
```

<br/>

### 4. Notice
- Created tasks are automatically saved to local storage.
- When entering the page for the first time, tasks stored in the local storage are fetched, and the fetching time is as follows.
   ```
   TODO: 0.2s
   DOING: 0.3s
   DONE: 0.4s
   ```
   At the longest time of 0.4 seconds, all tasks are rendered at once.   
   These were implemented for my Rx-js learning.

<br/>

### 5. Stack
|<img width="30" alt="react-logo" src="https://user-images.githubusercontent.com/67793530/172109940-97d63c83-b643-47ad-99bb-d71290cb72e4.png">|<img width="30" alt="rxjs-logo" src="https://user-images.githubusercontent.com/67793530/172110248-384ffd66-503e-4d19-b81a-c48d9846e659.png">|<img width="30" alt="rxjs-logo" src="https://user-images.githubusercontent.com/67793530/172107578-24931e75-4a5d-4e4d-b7d4-f898510df811.png">|<img width="30" alt="rxjs-logo" src="https://user-images.githubusercontent.com/67793530/172115548-bada64a4-c822-4a68-a132-efc6480672f7.png">|<img width="30" alt="rxjs-logo" src="https://user-images.githubusercontent.com/67793530/172115785-c60420e8-c29c-4594-8fcd-22e5f71053b0.png">
|:-:|:-:|:-:|:-:|:-:|
|[React.js](https://ko.reactjs.org/)|[Typescript](https://www.typescriptlang.org/)|[Rx.js](https://rxjs.dev/)|[Redux-Observable](https://redux-observable.js.org/)|[Emotion](https://emotion.sh/docs/introduction)

<br/>

### 6. Folder Structure
```js
src/
ㄴ actions/      // Functions for making Redux Action
ㄴ components/   // Main Components
   ㄴ Component/
     ㄴ vacs/    // View Assets Components
     ㄴ hooks/   // Custom Hooks
ㄴ constants/    // Common Constants
ㄴ epics/        // Epics for Redux-Observable
ㄴ hooks/        // Common hooks
ㄴ pages/        // Page Components
ㄴ reducers/     // Reducers for Redux
ㄴ store/        // Files for configuring Redux Store
ㄴ streams/      // Rx.js Streams
ㄴ styles/       // Files for Setting Emotion and Common Style
ㄴ types/        // Common types
ㄴ utils/        // Common Utils
```


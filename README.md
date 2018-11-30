# InsanelyGood-OTOP

### After clone or change branch
command `yarn` or `npm install` before run server

### Run server
Run 2 server
- `cd frontend` command `yarn start` or `npm start` for run react.
- `cd backend` command `yarn start` or `npm start` for run express.

### Task
Don't use `master` to do your task. Create your branch with your name and your task like `git checkout -b <name>-<your task>` ex. `git checkout -b jack-create-app` then, it will chang to your branch.

### Web Structure
- frontend
    - /src/api -> api for get data from backend
    - /src/component -> Component file
    - /src/css -> css
    - /src/views -> pages 
- backend
    - /public -> css
    - /routes -> routes
    - /views -> html file (Maybe use)
    - /spec -> Test
    - /models -> Schema

### Dump database
Dump database for see products by command `mongorestore --collection products --db otopaholicDBTest <Project directory>/dump/otopaholicDBTest/products.bson`

### Test for Backend
- `cd backend` command `yarn test` for run test
- name the test files as `____.test.js` in folder **tests**

### Test for Frontend
- `cd frontend` command `yarn test` for run test
- name the test files as `____.test.js` in the same folder of component that want to test

### Run testcafe
- `cd front` command `yarn testcafe` for run testcafe

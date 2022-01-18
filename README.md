
# My shopping hub

Electronics store created in React. The application gets products from MongoDB using the ExpressJS framework and allows users to store the cart status in the redux, which in turn gives us access to it from every component in the application. Additionally, the Application allows the user to add an email address to the database.
## Tech Stack

- React
- React-router
- Redux
- React hook form
- Styled-components
- NodeJS
- ExpressJS
- MongoDB

## Live demo

https://my-shopping-hub.herokuapp.com/

## How to run locally?

Clone the project

```bash
git clone https://github.com/MaciejTom/my-shopping-hub.git
```

Go to the project directory

```bash
cd my-shopping-hub
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm start
```
Add a file named '.env' and paste this content:

```bash
PORT=5000
MONGO_URI=mongodb+srv://user:user@my-shopping-hub.wtoke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
NODE_ENV=development
```
Go to the client directory

```bash
cd frontend
```

Install dependencies

```bash
npm install
```


Go back to project directory

```bash
cd ..
```


Start the server
```bash
npm start
```

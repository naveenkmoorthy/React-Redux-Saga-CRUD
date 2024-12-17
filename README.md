# Car Management Application

This application is a simple React-Redux app for managing a list of cars. Users can perform CRUD operations (Create, Read, Update, Delete) on car data. It includes state management with Redux, asynchronous actions with Redux-Saga, and Tailwind CSS for styling.

## Features

- **Add Cars**: Add new cars to the list using a form.
- **View Cars**: Display a list of cars in the application.
- **Update Cars**: Select and edit car details using a form.
- **Delete Cars**: Remove cars from the list.

## Prerequisites

Before starting, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [Yarn](https://yarnpkg.com/) (package manager)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the JSON Server:

   Create a `db.json` file in the src/mock directory with the following content:

   ```json
   {
     "cars": [
       {
         "id": "1",
         "make": "Toyota",
         "model": "Corolla",
         "year": 2020,
         "price": 15000
       }
     ]
   }
   ```

   Run the server:

   ```bash
   npx json-server --watch db.json --port 5000
   ```

4. Start the React application:

   ```bash
   yarn start
   ```

## Scripts

- `yarn start`: Starts the React application.
- `yarn build`: Builds the app for production.
- `npx json-server --watch src/mock/db.json --port 4000`: Starts the JSON Server.

## API Endpoints

- **GET /cars**: Fetch all cars.
- **POST /cars**: Add a new car.
- **PUT /cars/:id**: Update an existing car.
- **DELETE /cars/:id**: Delete a car.

## Redux Flow

1. **Actions**: Define the types and creators for actions (e.g., `FETCH_CARS`, `ADD_CAR`).
2. **Reducers**: Update the state based on actions.
3. **Sagas**: Handle asynchronous operations, such as API calls.
4. **Store**: Combine reducers and apply middlewares like Redux-Saga.
5. **Components**: Dispatch actions and connect to the Redux store using `useDispatch` and `useSelector`.

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. Ensure that `tailwindcss` is properly installed and configured in `tailwind.config.js`.

## Known Issues

- If Tailwind CSS is not working, ensure the `postcss` configuration is set up correctly.
- Check the `db.json` file and JSON Server for API issues.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JSON Server](https://github.com/typicode/json-server)


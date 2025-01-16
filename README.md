# Playwright Booking Demo

This repository demonstrates how to perform API testing using [Playwright](https://playwright.dev/), focusing on testing RESTful endpoints, validating HTTP requests and responses, and automating workflows. It includes examples of integration testing, status code checks, and response payload validation, with easy-to-read test reports.

## Features

- **API Testing**: Utilizes Playwright's capabilities to test various API endpoints, including POST, GET, PUT, PATCH, and DELETE requests. 
- **Automated Workflows**: Automates testing processes to ensure efficient and reliable validation of API functionalities.
- **Integration Testing**: Provides examples of how to perform integration tests to validate the interaction between different parts of the application.
- **Status Code Checks**: Includes checks to verify that API responses return the expected HTTP status codes.
- **Response Payload Validation**: Validates the structure and content of API response payloads to ensure they meet the expected criteria.
- **Test Reports**: Generates comprehensive and easy-to-read test reports to facilitate analysis and debugging.

## Getting Started

### Prerequisites

- **Node.js**: Ensure that Node.js is installed on your machine. You can download it from the [official website](https://nodejs.org/).

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/bryarcole/playwright-booking-demo.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd playwright-booking-demo
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

### Running Tests

- **Execute All Tests**:

  ```bash
  npx playwright test
  ```

- **View Test Report**:

  After running the tests, generate and view the test report:

  ```bash
  npx playwright show-report
  ```

## Configuration

The project is configured to use Playwright with TypeScript. You can modify the `playwright.config.ts` file to customize settings such as test directory, timeout, and reporter options. For more information on configuration options, refer to the [Playwright documentation](https://playwright.dev/docs/api/class-playwright).

## Resources

- **Playwright Documentation**: Comprehensive guide and API reference for Playwright. 
- **Playwright API Testing Guide**: Detailed tutorial on performing API testing with Playwright, including examples and best practices. 

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure that your code adheres to the existing style and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

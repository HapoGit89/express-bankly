### Conceptual Exercise

Answer the following questions below:

- What is a JWT?  JWT stands for JSON Web Token and is a technology used for encrypting user data.

- What is the signature portion of the JWT?  What does it do? The signature contains the header and payload of the Token hashed with a secret. This is then used to validate the authenticity of the user sending the JWT

- If a JWT is intercepted, can the attacker see what's inside the payload?  Yes, since the payload is only encoded not encrypted

- How can you implement authentication with a JWT?  Describe how it works at a high level.  The authentication works in a similar fashion to session/cookies with flask. When a user registers or signs in, the backend creates a token from the users data and sends it back to the frontend. The frontend then stores it and everytimne it makes a request to the backend, includes a token which then gets verified by a JWT method.

- Compare and contrast unit, integration and end-to-end tests. While unit testing is only testing the functionality of one method/function, integration testing aims at verifying that two software modules work together and end to end testing wants to test whether the whole application works.

- What is a mock? What are some things you would mock? Mocking is mostly used in unit testing. In order to test modules which are dependend on other modules you would mock the behaviour of those dependencies. You could for example mock an api by hard coding responses.

- What is continuous integration?  This means that software development is done in such a way as that newly developed features for an application are developed in parallel and the merged with the original code base. Merges typically take place in a frequent manner.

- What is an environment variable and what are they used for? Environment variables include data which the application needs for running but are changed depending on which environment they are run in. These variables can include secret keys and encryption parameters.

- What is TDD? What are some benefits and drawbacks?  TDD stands for Test Driven Development and describes a way of software development where you define an applications features by writing tests for them and then develop the code to fullfil the tests.

- What is the value of using JSONSchema for validation?  JSONSchema helps validating the structure of JSON sent with HTTP requests by providing blueprints which the incoming data is validated against. It makes validation scalable

- What are some ways to decide which code to test?  One can focus on which code will get changed the most, or which code gets referenced the most by other modules.

- What does `RETURNING` do in SQL? When would you use it? RETURNING describes the columns whose data you want returned from a SQL Query. It is for example used when inserting data.

- What are some differences between Web Sockets and HTTP? While Web Sockets keep a permanent connection between server and client, HTTP needs a new request for every exchange. Also while HTTP requests are one directional (Always requests from client and response from server), Web Sockets are bidirectional.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)? I liked using flask better because the Python methods are more powerful to me.

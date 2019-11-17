=== How to build a REST API using NODE, Express, and Mongo

===== What is HTTP... HYPERTEXT TRANSFER PROTOCOL
Application Layer Protocol
Build on top of TCP/IP Protocol
Rules for transferring resources
Every HTTP Request is executed independently without the  knowledge of requests that came before it
HTTP is stateless
TCP/IP is not statless
Payload(body/data) can be anything as long as it is defined in header.

===== What is REST... REPRESENTATIONAL STATE TRANSFER
Architectural Pattern with Design Guidelines
HTTP is usually the underlying protocol
Use HTTP Method Explicitly
Every RESTful resource has a uinque ID
Client state is not persisted between request (Stateless)
Caching policy for response
Separation of concerns between clients and servers
Layered System


===== What is an API... APPLICATION PROGRAMMING INTERFACE
Defines server-side functions that are supported
What request should be made
Format of the request and response
No Standard way of writing APIs
REST provides guidelines
CRUD Operations


===== INSTALLATION
IDE - ATOM/Webstrom/Sublime
NODE JS & NPM - Node 
Mongo Database - mLAb Cloud / Docker / Local Installation
REST CLIENT - API Testing - POSTMAN / INSOMNIA
Robo 3T for MongoDB

*mLAb - mLab is a fully managed cloud database service that hosts MongoDB databases. mLab runs on cloud providers Amazon, Google, and Microsoft Azure, and has partnered with platform-as-a-service providers.
REST CLIENT - POST MAN


npm run start - Normal run
npm run start-watch - Nodeman mode run


===== DEPLOYMENT
There is a service that will let you deploy your application real quick "now.sh", which is called "https://zeit.co/home"


REFERENCE
https://github.com/theoutlander/rest-api-workshop
https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

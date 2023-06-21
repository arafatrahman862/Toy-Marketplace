import React from 'react';

const Blog = () => {
    return (
        <div className='p-8'>
            <p className='text-5xl font-semibold text-center py-6'>Blog</p>
            <p className='text-2xl font-semibold py-4'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
            <p>
                An access token and refresh token are commonly used in authentication systems to verify the identity of a user and grant access to protected resources.
                <br />
                Here's how the token flow generally works: <br />

                1.User Authentication: The user provides their credentials (such as username and password) to the authentication server.<br />
                2.Token Issuance: The authentication server verifies the user's credentials and, if valid, generates an access token and a refresh token.<br />
                3.Access Token Usage: The client (e.g., a web or mobile application) includes the access token in each request to the server's protected resources.<br />
                4.Access Token Expiration: The server checks the access token's expiration time. If the token is still valid, the server processes the request; otherwise, it returns an error.</p>

            <p className='text-2xl font-semibold py-4'>Compare SQL and NoSQL databases?</p>
            <p>SQL (Structured Query Language) and NoSQL (Not only SQL) are two different types of database management systems, each with its own characteristics and use cases. Here's a comparison between the two:

                Data Model:

                SQL databases use a structured data model where data is organized into tables with predefined schemas. Each table consists of rows and columns, and relationships between tables are defined using foreign keys. <br />
                NoSQL databases use various data models, such as key-value, document, columnar, or graph. These models provide more flexibility and allow for dynamic and unstructured data. <br />
                Scalability: <br />

                SQL databases traditionally have vertical scalability, which means they can handle increased workload by adding more resources (CPU, RAM) to a single server. Horizontal scalability (scaling across multiple servers) can be challenging. <br />
                NoSQL databases, especially those based on distributed architectures, are designed for horizontal scalability. They can handle large amounts of data and high traffic loads by adding more servers to a cluster.</p>


            <p className='text-2xl font-semibold py-4'>What is express js? What is Nest JS?</p>
            <p>Express.js is a minimalistic and flexible web application framework for Node.js. It provides a lightweight and unopinionated approach to building web servers and APIs. Express.js focuses on simplicity and allows developers to handle HTTP requests, define routes, and manage middleware.</p>


            <p className='text-2xl font-semibold py-4'>What is MongoDB aggregate and how does it work?</p>
            <p>In MongoDB, the aggregate framework is a powerful tool used for data aggregation and analysis. It allows you to perform complex operations on collections of documents, including grouping, filtering, transforming, and calculating aggregate values.

The aggregate framework in MongoDB operates on the concept of pipelines. A pipeline is a sequence of stages, and each stage applies a specific operation to the input documents and passes the results to the next stage.</p>
        </div>
    );
};

export default Blog;
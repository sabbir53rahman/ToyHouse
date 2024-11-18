import React from "react";

function Blog() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-gray-900 to-blue-900">
      <section className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-white">
          Tech Blogs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Blog 1: Access Tokens and Refresh Tokens */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:shadow-xl relative overflow-hidden hover:bg-blue-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 relative z-10">
              What is an Access Token and Refresh Token? How do they work and
              where should we store them on the client-side?
            </h2>
            <p className="text-gray-700 mb-4 relative z-10">
              An <strong>Access Token</strong> is a credential used to access
              protected resources from a server. A{" "}
              <strong>Refresh Token</strong> is a long-lived token used to
              obtain a new access token when the current one expires. They work
              together to ensure secure and scalable access to protected APIs.
            </p>
            <p className="text-gray-700 mb-4 relative z-10">
              Access tokens should be stored in memory or a secure cookie to
              prevent security risks like XSS attacks. Refresh tokens, being
              more sensitive, should ideally be stored in{" "}
              <strong>HttpOnly</strong> cookies to prevent access from
              JavaScript.
            </p>
          </div>

          {/* Blog 2: SQL vs NoSQL Databases */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:shadow-xl relative overflow-hidden hover:bg-blue-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 relative z-10">
              Compare SQL and NoSQL Databases
            </h2>
            <p className="text-gray-700 mb-4 relative z-10">
              <strong>SQL databases</strong> are relational databases that use
              structured query language (SQL) for defining and manipulating
              data. They are highly structured, follow ACID properties, and are
              suitable for complex queries. Examples include MySQL, PostgreSQL,
              and Oracle.
            </p>
            <p className="text-gray-700 mb-4 relative z-10">
              <strong>NoSQL databases</strong>, on the other hand, are
              non-relational and are designed to handle large volumes of
              unstructured or semi-structured data. They offer high scalability,
              flexibility, and performance, but may sacrifice consistency.
              Popular examples include MongoDB, Cassandra, and Redis.
            </p>
          </div>

          {/* Blog 3: Express.js and NestJS */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:shadow-xl relative overflow-hidden hover:bg-blue-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 relative z-10">
              What is Express.js? What is NestJS?
            </h2>
            <p className="text-gray-700 mb-4 relative z-10">
              <strong>Express.js</strong> is a minimalist and flexible Node.js
              web application framework that provides a robust set of features
              for building web and mobile applications. It simplifies
              server-side programming by handling routing, middleware, and HTTP
              requests.
            </p>
            <p className="text-gray-700 mb-4 relative z-10">
              <strong>NestJS</strong> is a progressive Node.js framework built
              with TypeScript, heavily inspired by Angular. It leverages
              Express.js under the hood but adds more structure and scalability
              with out-of-the-box support for dependency injection, modules, and
              a powerful CLI for managing large-scale applications.
            </p>
          </div>

          {/* Blog 4: MongoDB Aggregation */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:shadow-xl relative overflow-hidden hover:bg-blue-300 ">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 relative z-10">
              What is MongoDB Aggregation and How Does it Work?
            </h2>
            <p className="text-gray-700 mb-4 relative z-10">
              <strong>MongoDB Aggregation</strong> is a powerful framework for
              data processing and transformation. It allows you to perform
              operations like filtering, grouping, sorting, and reshaping data
              in a pipeline of stages. Each stage passes its output to the next
              stage, enabling complex data transformations.
            </p>
            <p className="text-gray-700 mb-4 relative z-10">
              Aggregation works by defining a series of stages like{" "}
              <code>$match</code> (for filtering), <code>$group</code> (for
              grouping data), and <code>$project</code> (for reshaping data). It
              provides a highly flexible way to process large volumes of data
              directly on the database server.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;

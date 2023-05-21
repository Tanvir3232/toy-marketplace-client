import { Helmet } from "react-helmet";

const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>SmartyToy  | Blogs</title>
            </Helmet>
            <h1 className="text-3xl font-bold my-5 text-center">Some Important Viva Questions and Answers</h1>
            <div>
                <li className="font-bold text-lg">What is an access token and refresh token? How do they work and where
                    should we store them on the client-side?</li>
                <div className="mx-6">
                    <h5 className="text-green-500 font-bold underline">Answer:</h5>
                    <p className="py-1">
                        <strong>Access Token:</strong> An access token is a special string of characters that serves as proof of authentication and authorization. When a user logs in or authenticates with a web application, the server generates an access token for that user.
                    </p>
                    <p className="py-1">
                        <strong>Refresh Token:</strong> A refresh token, on the other hand, is a separate token that is also generated during the authentication process. Its purpose is to obtain a new access token when the current one expires. Access tokens typically have a relatively short lifespan for security reasons.
                    </p>
                    <p className="py-1">
                        Regarding where to store these tokens on the client-side:
                    </p>
                    <ul className="pl-3">
                        <li className="py-1"> <strong>Access Token:</strong> Access Token: It can be stored in either session storage or local storage. Session storage is cleared when the browser session ends, while local storage persists even after closing the browser. However, it's important to consider security measures like encryption or secure HTTP-only cookies to protect access tokens from potential attacks.</li>
                        <li className="py-1"> <strong>Access Token:</strong> Refresh Token: It should be stored in a more secure manner, such as an HTTP-only cookie. HTTP-only cookies cannot be accessed by client-side scripts, reducing the risk of unauthorized access</li>
                    </ul>
                </div>
            </div>
            <div className="my-8">
                <li className="font-bold text-lg">Compare SQL and NoSQL databases? </li>
                <div className="mx-6">
                    <h5 className="text-green-500 font-bold underline">Answer:</h5>
                    <li className="py-1">
                        <strong> Data Organization:</strong> SQL uses tables with fixed schemas, while NoSQL offers flexible data organization.
                    </li >
                    <li className="py-1">
                        <strong> Scalability :</strong> SQL databases scale vertically, while NoSQL databases scale horizontally
                    </li >
                    <li className="py-1">
                        <strong> Schema: </strong> SQL databases have rigid schemas, whereas NoSQL databases have flexible schemas.

                    </li >
                    <li className="py-1">
                        <strong> Query Language :</strong> SQL databases use SQL as a standardized query language, while NoSQL databases have different query languages.
                    </li >
                    <li className="py-1">
                        <strong> Use Cases :</strong> SQL is suitable for structured data and complex queries, while NoSQL is better for unstructured or rapidly changing data and scalability.
                    </li >
                   
                </div>
            </div>
            <div className="my-8">
                <li className="font-bold text-lg">What is express js? What is Nest JS? </li>
                <div className="mx-6">
                    <h5 className="text-green-500 font-bold underline">Answer:</h5>
                    <li className="py-1">
                        <strong> Express js:</strong> Express.js is a minimalist web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. It focuses on being lightweight and unopinionated, giving developers the freedom to structure and design their applications as they see fit. Express.js provides essential features for routing, handling requests, and serving responses, allowing developers to quickly create server-side applications with Node.js.
                    </li >
                    <li className="py-1">
                        <strong> Nest js:</strong> Nest.js is a progressive, opinionated framework for building scalable and maintainable server-side applications using Node.js. It is built with TypeScript and takes inspiration from Angular's structure and design patterns. Nest.js provides a modular and organized approach to application development. It offers features like dependency injection, decorators, middleware, and integrated testing, which promote code reusability, scalability, and maintainability. Nest.js is well-suited for building enterprise-level applications or APIs.
                    </li >
                   
                   
                </div>
            </div>
            <div className="my-8">
                <li className="font-bold text-lg">What is MongoDB aggregate and how does it work? </li>
                <div className="mx-6">
                    <h5 className="text-green-500 font-bold underline">Answer:</h5>
                    <p className="py-1">MongoDB aggregate function is like a data processing pipeline where you can apply various operations to transform and analyze your data. It allows you to perform complex calculations, filtering, grouping, and other data manipulation tasks to get the desired results from your MongoDB collections.</p>
                    <p className="py-1">Here a simplified explanation of how the aggregate function works:</p>
                    <li className="py-1">
                        <strong> Input Data:</strong>  You start with a collection of documents in MongoDB that you want to analyze or transform
                    </li >
                    <li className="py-1">
                        <strong>  Pipeline Stages:</strong> You define a series of stages that specify the operations to be performed on the data. Each stage represents a step in the pipeline.
                    </li >
                    <li className="py-1">
                        <strong> Data Transformation:</strong>  At each stage, you can apply operations like filtering, grouping, sorting, projecting (selecting specific fields), joining data from different collections, performing calculations, and more. Each stage modifies the data based on the specified operation.
                    </li >
                    <li className="py-1">
                        <strong>  Data Flow:</strong>  The data flows through the pipeline from one stage to another, and the result of each stage becomes the input for the next stage.
                    </li >
                    <li className="py-1">
                        <strong>  Final Result:</strong>   Once the data passes through all the stages in the pipeline, you get the final result, which could be a transformed dataset, aggregated values, statistical calculations, or any other desired outcome.
                    </li >
                   
                   
                </div>
            </div>
        </div>
    );
};

export default Blogs;
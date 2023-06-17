# Test submission repository

Q1) Mention the working of Internet Website in Terms of Front-end & Back-end Divisions.

A1) The front-end refers to the part that users interact with directly. 
It encompasses the visual and interactive elements that users see and interact with in their web browsers. The front-end division involves JavaScript, CSS (Cascading Style Sheets), HTML (Hypertext Markup Language).
The back-end refers to the server-side of a website, which handles the hidden operations. It involves the logic, databases, and server-side processes that enable the website to function. 
The back-end division typically includes APIs (Application Programming Interfaces), Database, Programming Languages and Frameworks, Server.
The front-end and back-end divisions work together to create a cohesive web application. The front-end components handle the user interface and user interactions, while the back-end components handle data processing, storage, and business logic. Through this collaboration, websites can provide an interactive and dynamic experience to users while efficiently managing the underlying data and functionality.


******************************************************************************************************************************************************************************


Q2) What are tags in HTML? Explain the each category of tag with an Example.

A2) In HTML, tags are used to define the structure of a web page. They are used to mark up different types of content, such as headings, paragraphs, lists, images, and tables. Tags are always enclosed in angle brackets (< >). The opening tag indicates the start of a content element, and the closing tag indicates the end of the content element.

There are four main categories of tags in HTML:

1. Structural tags: Structural tags are used to define the structure of a web page. Eg: <h1></h1> tag is used to mark up a heading, the <p> tag is used to mark up a paragraph, and the <table> tag is used to mark up a table.

2. Formatting tags: Formatting tags are used to format the appearance of content. Eg: <b></b> tag is used to make text bold, the <i></i> tag is used to make text italic, and the <u></u> tag is used to underline text.

3. Input tags: Input tags are used to collect user input. Eg: <input type="text"> tag is used to create a text box, the <input type="radio"> tag is used to create a radio button, and the <input type="checkbox"> tag is used to create a check box.

4. Other tags: Other tags include tags for images, links, and comments. Eg: <img> tag is used to insert an image, the <a> tag is used to create a link, and the <!-- comment --> tag is used to add a comment to the HTML code.

Tags are an essential part of HTML and are used to create and format web pages. By understanding the different categories of tags, you can create more complex and visually appealing web pages.


******************************************************************************************************************************************************************************


Q3) Explain the working Procedure of Virtual DOM.

A3) The virtual DOM is a lightweight, in-memory representation of the actual DOM. It is used by many modern JavaScript frameworks, such as React, Vue, and Angular, to improve the performance of their applications.

When a change is made to the virtual DOM, the framework compares it to the previous version of the virtual DOM. If there are any differences, the framework will then update the actual DOM to reflect those changes. This process is called reconciliation.

The virtual DOM can be used to improve performance in two ways. First, it allows the framework to batch together changes to the DOM. This means that the framework can update the DOM less frequently, which can improve performance. Second, the virtual DOM allows the framework to only update the parts of the DOM that have actually changed. This can also improve performance, as it prevents the framework from having to update the entire DOM every time a change is made.

The virtual DOM is a powerful tool that can be used to improve the performance of JavaScript applications. However, it is important to note that the virtual DOM is not a silver bullet. It can only improve performance if it is used correctly. If the virtual DOM is not used correctly, it can actually make performance worse.

Here are the steps involved in the working procedure of Virtual DOM:

1. The user interacts with the application, which causes a change to be made to the state of the application.
2. The framework updates the virtual DOM to reflect the change to the state of the application.
3. The framework compares the current version of the virtual DOM to the previous version of the virtual DOM.
4. If there are any differences between the two versions of the virtual DOM, the framework will update the actual DOM to reflect those changes.
5. The browser will then render the updated DOM to the screen.

The virtual DOM is a powerful tool that can be used to improve the performance of JavaScript applications. However, it is important to note that the virtual DOM is not a silver bullet. It can only improve performance if it is used correctly. If the virtual DOM is not used correctly, it can actually make performance worse.


******************************************************************************************************************************************************************************


Q4) Mention some Differences between MySQL and No SQL.

A4) Some of the key differences between MySQL and NoSQL:

Data model: MySQL is a relational database, which means that data is stored in tables that are related to each other by primary and foreign keys. NoSQL databases, on the other hand, are non-relational, which means that data can be stored in a variety of ways, such as documents, key-value pairs, or graphs.
Scalability: MySQL is vertically scalable, which means that you can increase its capacity by adding more memory and CPU power to the same server. NoSQL databases, on the other hand, are horizontally scalable, which means that you can increase their capacity by adding more servers to the cluster.
Consistency: MySQL guarantees ACID compliance, which means that all database operations are atomic, consistent, isolated, and durable. NoSQL databases, on the other hand, do not always guarantee ACID compliance.
Query language: MySQL uses SQL, which is a standard query language. NoSQL databases, on the other hand, use a variety of different query languages, or they may not have a query language at all.
Popularity: MySQL is more popular than NoSQL, especially for web applications. NoSQL databases are becoming more popular, however, for applications that require high scalability or flexibility.
In general, MySQL is a good choice for applications that require ACID compliance, a standard query language, and a large user community. NoSQL databases are a good choice for applications that require high scalability, flexibility, or a different data model than MySQL.

Here is a table that summarizes the key differences between MySQL and NoSQL:

**********************************************************
*  Feature	    *      MySQL      *	      NoSQL          *
**********************************************************
* Data model	  *    Relational	  *    Non-relational    *
**********************************************************
* Scalability   *   	Vertical	  *     Horizontal       *
**********************************************************
* Consistency * ACID compliant * Notalways ACIDcompliant *
**********************************************************
*Query language	 *      SQL	      *     Varies           *
**********************************************************
*  Popularity	   *   More popular *	  Less popular       *
**********************************************************

Ultimately, the best database for your application depends on your specific requirements.


******************************************************************************************************************************************************************************


Q5) Explain any one DBMS Technology in your own words.

A5) A relational database management system (RDBMS) is a database management system (DBMS) that stores and retrieves data in the form of relations, also known as tables. The RDBMS approach separates data definition from data manipulation, allowing users and programmers to focus on data manipulation without needing to know how the data is physically stored.

RDBMSs are the most popular type of DBMS, and they are used by a wide variety of applications, including web applications, e-commerce applications, and enterprise resource planning (ERP) systems.

The main advantages of RDBMSs are:

* Data integrity: RDBMSs enforce data integrity rules, such as unique keys and referential integrity, which help to ensure that the data in the database is accurate and consistent.

* Scalability: RDBMSs can be scaled horizontally by adding more servers, or vertically by adding more memory and processing power to a single server.
Security: RDBMSs provide a variety of security features, such as user authentication, authorization, and encryption, to protect data from unauthorized access.
The main disadvantages of RDBMSs are:

* Cost: RDBMSs can be expensive to purchase and maintain.

* Complexity: RDBMSs can be complex to set up and manage.

* Performance: RDBMSs can be slow for some types of queries, such as those that involve large amounts of data.

Overall, RDBMSs are a powerful and versatile database technology that is well-suited for a wide variety of applications.

Here are some examples of popular RDBMSs:
* MySQL
* PostgreSQL
* Oracle
* Microsoft SQL Server
* IBM DB2

If you are looking for a database management system for your application, an RDBMS is a good option to consider.


******************************************************************************************************************************************************************************
                              ***** *   * *****    ***** *     * *  .
                                *   ***** ***      ***   *  *  * *    *
                                *   *   * *****    ***** *     * *  '
******************************************************************************************************************************************************************************


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

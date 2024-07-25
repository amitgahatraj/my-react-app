import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header id="#top">
        <h1
          style={{
            color: "green",
            padding: "30px",
            margin: "10px",
          }}
        >
          Using HTML Semantics
        </h1>
      </header>

      <main style={{ alignItems: "flex-start" }}>
        <section style={{ textAlign: "left" }}>
          <nav style={{ alignContent: "-moz-initial" }}>
            <h3 style={{ textAlign: "left" }}>Contents</h3>
            <li>
              <a href="#what">What is React?</a>
            </li>
            <li>
              <a href="#history">ReactJS History</a>
            </li>
            <li>
              <a href="#why">Why React?</a>
            </li>
            <li>
              <a href="#adv">ReactJS Advantages</a>
            </li>
          </nav>

          <article
            id="what"
            style={{
              backgroundColor: "lightcoral",
              padding: "30px",
              margin: "10px",
            }}
          >
            <h2>What is React?</h2>
            React is a framework that employs Webpack to automatically compile
            React, JSX, and ES6 code while handling CSS file prefixes. React is
            a JavaScript-based UI development library. Although React is a
            library rather than a language, it is widely used in web
            development. The library first appeared in May 2013 and is now one
            of the most commonly used frontend libraries for web development.
            React offers various extensions for entire application architectural
            support, such as Flux and React Native, beyond mere UI.
          </article>

          <article
            id="history"
            style={{
              backgroundColor: "lightgray",
              padding: "30px",
              margin: "10px",
            }}
          >
            <h2>ReactJS History</h2>
            When compared to other technologies on the market, React is a new
            technology. Jordan Walke, a software engineer at Facebook, founded
            the library in 2011, giving it life. The likes of XHP, a
            straightforward HTML component framework for PHP, have an influence
            on React. React's newsfeed was its debut application in 2011. Later,
            Instagram picks it up and incorporates it into their platform.
          </article>

          <article
            id="why"
            style={{
              backgroundColor: "lightsteelblue",
              padding: "30px",
              margin: "10px",
            }}
          >
            <h2>Why React?</h2>
            React’s popularity today has eclipsed that of all other front-end
            development frameworks. Here is why: Easy creation of dynamic
            applications: React makes it easier to create dynamic web
            applications because it requires less coding and offers more
            functionality, as opposed to JavaScript, where coding often gets
            complex very quickly. Improved performance: React uses Virtual DOM,
            thereby creating web applications faster. Virtual DOM compares the
            components’ previous states and updates only the items in the Real
            DOM that were changed, instead of updating all of the components
            again, as conventional web applications do. Reusable components:
            Components are the building blocks of any React application, and a
            single app usually consists of multiple components. These components
            have their logic and controls, and they can be reused throughout the
            application, which in turn dramatically reduces the application’s
            development time. Unidirectional data flow: React follows a
            unidirectional data flow. This means that when designing a React
            app, developers often nest child components within parent
            components. Since the data flows in a single direction, it becomes
            easier to debug errors and know where a problem occurs in an
            application at the moment in question. Small learning curve: React
            is easy to learn, as it mostly combines basic HTML and JavaScript
            concepts with some beneficial additions. Still, as is the case with
            other tools and frameworks, you have to spend some time to get a
            proper understanding of React’s library. It can be used for the
            development of both web and mobile apps: We already know that React
            is used for the development of web applications, but that’s not all
            it can do. There is a framework called React Native, derived from
            React itself, that is hugely popular and is used for creating
            beautiful mobile applications. So, in reality, React can be used for
            making both web and mobile applications. Dedicated tools for easy
            debugging: Facebook has released a Chrome extension that can be used
            to debug React applications. This makes the process of debugging
            React web applications faster and easier. The above reasons more
            than justify the popularity of the React library and why it is being
            adopted by a large number of organizations and businesses. Now let’s
            familiarize ourselves with React’s features.
          </article>

          <article
            id="adv"
            style={{
              backgroundColor: "lightgoldenrodyellow",
              padding: "30px",
              margin: "10px",
            }}
          >
            <h2>ReactJS Advantages</h2>
            React.js builds a customized virtual DOM. Because the JavaScript
            virtual DOM is quicker than the conventional DOM, this will enhance
            the performance of apps. ReactJS makes an amazing UI possible.
            Search - engine friendly ReactJS. Modules and valid data make larger
            apps easier to manage by increasing readability. React integrates
            various architectures. React makes the entire scripting environment
            process simpler. It makes advanced maintenance easier and boosts
            output. Guarantees quicker rendering The availability of a script
            for developing mobile apps is the best feature of React. ReactJS is
            supported by a large community.
          </article>
        </section>

        <aside style={{ marginBottom: "100px", textAlign: "left" }}>
          <h3 style={{ textAlign: "left" }}>Aside Section</h3>
          This section used aside tag. It is explaining some conted aside from
          the content above.
        </aside>
      </main>

      <footer style={{ margin: "2px", backgroundColor: "skyblue" }}>
        This is the footer section of the webpage. Click on{" "}
        <a href="top"> TOP</a> to go back to the top of the page.
      </footer>
    </>
  );
}

export default App;

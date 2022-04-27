import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

export default function App() {
  const [faqs, setFaqs] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {faqs.map((faq) => {
            return <SingleQuestion key={faq.id} {...faq} />;
          })}
        </section>
      </div>
    </main>
  );
}

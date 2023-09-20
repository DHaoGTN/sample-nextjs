import { ChatBox } from "../components/chat-box";

function Home() {
  return (
    <div className="wrapper">
      <section>
        <h1>Sample NextJs test</h1>
        <p>
          This example for test only with NextJS
        </p>
      </section>
      <section>
        <ChatBox />
      </section>
    </div>
  );
}

export default Home;

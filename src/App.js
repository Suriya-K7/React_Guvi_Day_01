import Header from "./Header";

function App() {
  let time = new Date();

  return (
    <div>
      <Header />
      <p>Hello world this is {time.getFullYear()} year</p>
    </div>
  );
}

export default App;

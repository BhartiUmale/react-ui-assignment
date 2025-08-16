import InputField from "./components/InputField/InputField";
import DataTable from "./components/DataTable/DataTable";

function App() {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>React UI Assignment</h1>

        <section>
          <h2>InputField Demo</h2>
        <InputField/>
        </section>

        <section>
          <h2>DataTable Demo</h2>
          <DataTable/>
        </section>
      </div>
    </>
  );
}

export default App;

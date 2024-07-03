import { Route, Routes } from "react-router-dom";
import { MultiStepForm } from "./components/MultiStepForm";
import { PersonalInfo } from "./pages/PersonalInfo";

function App() {
  return (
    <div className="font-body w-full h-screen flex lg:items-center justify-center">
      <Routes>
        <Route path="/multi-step-form/" element={<MultiStepForm />}>
          <Route path="personal-info" element={<PersonalInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

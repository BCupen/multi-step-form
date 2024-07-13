import { Route, Routes } from "react-router-dom";
import { MultiStepForm } from "./components/MultiStepForm";
import { PersonalInfo } from "./pages/PersonalInfo";
import { SelectPlan } from "./pages/SelectPlan";
import { AddOns } from "./pages/AddOns";
import { Summary } from "./pages/Summary";

function App() {
  return (
    <div className="font-body w-full h-screen flex lg:items-center justify-center">
      <Routes>
        <Route path="/multi-step-form/" element={<MultiStepForm />}>
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="select-plan" element={<SelectPlan />} />
          <Route path="add-ons" element={<AddOns />} />
          <Route path="summary" element={<Summary />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

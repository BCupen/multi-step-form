import { Outlet } from "react-router-dom"
import { Navigation } from "./Navigation"

export const MultiStepForm = () => {
  return (
    <div className="max-w-[1440px] w-full lg:h-[75%] flex flex-col lg:flex-row bg-white rounded-xl lg:p-4">
        <Navigation />
        <div className="relative w-full lg:w-2/3 h-full bg-neutrals-magnolia lg:bg-white px-4 lg:px-16">
            <Outlet />
        </div>
    </div>
  )
}

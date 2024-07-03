import { Outlet } from "react-router-dom"
import { Navigation } from "./Navigation"

export const MultiStepForm = () => {
  return (
    <div className="max-w-[1024px] w-full lg:h-[60%] flex flex-col lg:flex-row bg-white rounded-xl lg:p-4">
        <Navigation />
        <div className="relative w-full lg:w-2/3 h-full bg-neutrals-magnolia lg:bg-white px-4 lg:px-16">
            <Outlet />
            <div className="absolute w-full bg-white bottom-0 left-0 p-4 lg:px-24 flex justify-end">
                <button className="bg-primary-marine text-neutrals-magnolia rounded-md p-3">Next Step</button>
            </div>
        </div>
    </div>
  )
}

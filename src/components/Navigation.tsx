import { NavStep } from "./NavStep"

export const Navigation = () => {
  return (
    <nav className="w-full lg:w-[32%] h-[30%] lg:h-full bg-mobile lg:bg-desktop bg-cover bg-top lg:bg-center bg-no-repeat p-9 rounded-xl">
        <ul className="flex flex-row lg:flex-col justify-center gap-6 lg:gap-8">
            <NavStep stepNo={1} stepTitle="Your Info" />
            <NavStep stepNo={2} stepTitle="Select Plan" />
            <NavStep stepNo={3} stepTitle="Add-Ons" />
            <NavStep stepNo={4} stepTitle="Summary" />
        </ul>
    </nav>
  )
}

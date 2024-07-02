import { NavStep } from "./NavStep"

export const Navigation = () => {
  return (
    <nav className="w-full lg:w-[32%] h-full bg-mobile lg:bg-desktop bg-contain bg-top lg:bg-center bg-no-repeat p-12">
        <ul className="flex flex-row lg:flex-col gap-8">
            <NavStep stepNo={1} stepTitle="Your Info" />
            <NavStep stepNo={2} stepTitle="Select Plan" />
            <NavStep stepNo={3} stepTitle="Add-Ons" />
            <NavStep stepNo={4} stepTitle="Summary" />
        </ul>
    </nav>
  )
}

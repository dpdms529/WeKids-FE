import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function CardDesignLayout({ 
  children, 
  showBackButton = true,
}) {
  return (
    <div className="flex flex-col h-screen max-w-full overflow-hidden bg-sub02">
      {showBackButton && (
        <div className="flex p-4 h-20">
          <ArrowLeftIcon className="size-8 text-white cursor-pointer" />
        </div>
      )}
      <div className="flex flex-col p-4 h-full">
        {children}
      </div>
    </div>
  );
}
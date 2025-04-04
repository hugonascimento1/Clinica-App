import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "lucide-react";

interface NavPagesProps {
    nomePage: string;
}

export default function NavPages({ nomePage }: NavPagesProps) {
    const router = useRouter();

    const handleBackPage = () => {
        router.push('/home')
    }

    return (
        <div className="flex bg-foreground w-full text-white gap-3 h-28 justify-start items-center pl-5">
            <button
                onClick={handleBackPage}
            >
                <ChevronLeftIcon width={40} height={40} />
            </button>
            <h1 className="text-white text-xl">{nomePage}</h1>
        </div>
    )
}
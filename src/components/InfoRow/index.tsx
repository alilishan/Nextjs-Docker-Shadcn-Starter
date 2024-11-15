import { ReactNode, FC } from "react";
import { cn } from "@/lib/utils";

interface Props {
    label: string;
    value: string | ReactNode;
    rowClassName?: string;
}

const InfoRow: FC<Props> = ({ label, value, rowClassName }) => {
    return (
        <div className={cn("flex items-center w-full", rowClassName)}>
            <div className="w-1/3 font-medium text-dark bg-slate-50 p-2">{label}</div>
            <div className="grow ps-2">{value}</div>
        </div>
    );
}

export default InfoRow;

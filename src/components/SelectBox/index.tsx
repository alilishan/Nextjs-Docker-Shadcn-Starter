import React, { FC } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
    placeholder: string;
    value: string;
    options: {
        key: string;
        value: string;
    }[];
    onChange: (value: string) => void;
}

const SelectBox:FC<Props> = ({
    placeholder,
    value,
    options,
    onChange,
}) => {
    return (
        <Select
            value={value}
            onValueChange={onChange}
        >
            <SelectTrigger className="bg-white rounded-md border font-medium dark:bg-slate-900 w-[180px]">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <ScrollArea className="max-h-[25vh]">
                    <SelectGroup>
                        {options.map((option) => (
                            <SelectItem key={option.key} value={option.key}>{option.value}</SelectItem>
                        ))}
                    </SelectGroup>
                </ScrollArea>
            </SelectContent>
        </Select>
    );
};

export default SelectBox;

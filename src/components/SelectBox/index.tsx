import React, { FC } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
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
            <SelectTrigger className="bg-white rounded-md border dark:bg-slate-900 w-[180px]">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {options.map((option) => (
                        <SelectItem key={option.key} value={option.key}>{option.value}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default SelectBox;

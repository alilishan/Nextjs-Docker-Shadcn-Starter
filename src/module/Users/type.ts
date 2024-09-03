type User = {
    id: string
    age: number
    // status: "pending" | "processing" | "success" | "failed"
    lastName: string
    firstName: string
    hair: {
        color: string
        type: string
    }
};


export type { User };

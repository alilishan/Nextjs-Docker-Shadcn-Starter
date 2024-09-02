


export const fetcher = async ([url, payload]: [
    string,
    string | undefined
]) => {
    const options = {
        method: payload ? "POST" : "GET",
        ...(payload && { body: payload }),
        headers: {
        accept: "application/json",
            "Content-Type": "application/json",
        },
    };
    // console.log('fetcher', url, payload, options);
    return fetch(url, options).then(r => r.json());
};

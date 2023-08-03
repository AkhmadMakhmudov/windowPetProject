export const postRequest = async (url, body) => {
    const response = await fetch(url, {
        method: "POST",
        // headers: {
        //     'Content-type': 'application/json'
        // },
        body: body
    });

    if(!response.ok) {
        throw new Error('server not working');
    }

    return await response.text();
};
import axios from 'axios';

export async function axiosPutHelperMethod<T>(
    path: string,
    dataId: string,
    putData?: T
): Promise<any> {
    try {
        const pathParam: string = `${path}${dataId}`;
        const response = await axios.put<T>(pathParam, putData);
        console.log('POST REQUEST', response.data);
    } catch (error: any) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('error.response.data', error.response.data);
            console.log('error.response.status', error.response.status);
            console.log('error.response.headers', error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance
            // of http.ClientRequest in node.js
            console.log('error.request', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
    }
}

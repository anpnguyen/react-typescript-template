export async function fakeHttpCall(ms: number): Promise<string> {
    try {
        let fakeData: string = 'This is a fake response';
        const delay = (ms: number) =>
            new Promise((resolve) => setTimeout(resolve, ms));
        await delay(2000);
        return fakeData;
    } catch (error) {
        throw new Error('Irrelevant error');
    }
}

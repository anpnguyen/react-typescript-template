import { useState, useEffect } from 'react';
import { IRenderOrderBodyProps } from '../../interfaces/order/order.interface';
import { axiosGetHelperMethod } from '../http/axios-get-helper';

export function useGetOrders(): IRenderOrderBodyProps[] {
    const [data, setData] = useState<IRenderOrderBodyProps[]>([]);

    async function getData(): Promise<void> {
        const results: IRenderOrderBodyProps[] =
            await axiosGetHelperMethod<IRenderOrderBodyProps>(
                'http://localhost:7000/api/order/'
            );
        setData(results);
    }

    useEffect(() => {
        getData();
    }, []);

    return data;
}

import React, { useState } from 'react';
import './Table.css';

export const Table = (props: any): JSX.Element => {
    const initDataShow = props.bodyData;
    const [dataShow, setDataShow] = useState(initDataShow);
    return (
        <div>
            <div className="table-wrapper">
                <table>
                    {props.headData && props.renderHead ? (
                        <thead>
                            <tr>
                                {props.headData.map(
                                    (item: string, index: number) =>
                                        props.renderHead(item, index)
                                )}
                            </tr>
                        </thead>
                    ) : null}
                    {props.bodyData && props.renderBody ? (
                        <tbody>
                            {dataShow.map((item: string, index: number) =>
                                props.renderBody(item, index)
                            )}
                        </tbody>
                    ) : null}
                </table>
            </div>
        </div>
    );
};

import React from 'react';
import {Helmet} from "react-helmet";

const Page = (props: Props) => {
    const {title, children, bodyStyle, ...rest} = props;
    return (
        <div {...rest}>
            <Helmet>
                <title>{title}</title>
                <body className={bodyStyle}></body>
            </Helmet>
            {children}
        </div>
    );
};

type Props = {
    children?: any,
    title: string,
    bodyStyle?: string;
    // All other props
    [rest: string]: any;
}

export default Page;
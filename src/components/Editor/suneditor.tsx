import React from 'react';
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css';

const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
});

const MyComponent = () => {
    return (
        <div>
            <SunEditor />
        </div>
    );
};
export default MyComponent;
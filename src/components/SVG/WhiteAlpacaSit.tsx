import * as React from "react";

const WhiteAlpacaSit: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            // viewBox="1000 800 300 300"
            viewBox="1050 800 220 220"
            {...props}
        >
            <defs>
                <style>{".st2{fill:#fff}"}</style>
            </defs>
            <g>
                <path className="st2" d="M1242.32,970.56h-47.1l-.57-.02v-14.66h21.46v-36.64h-6.8v-56.44h0s6.8,0,6.8,0h22.51v-7.33h0v-7.33h-14.66v-14.66h-29.32v-14.66h-7.85v14.66h-14.66v-14.66h-7.85v100.41h-116.22v14.66h14.66v51.3h79.07v-8.78h-19.67v-9.84h-9.84v-9.84h-19.67v-9.84h19.67v9.84h9.84v9.84h19.67v9.84h9.84v8.78h24.76v.02h75.35v-14.66h-9.42ZM1190.73,848.14c0-5.24,4.25-9.49,9.49-9.49s9.49,4.25,9.49,9.49-4.25,9.49-9.49,9.49-9.49-4.25-9.49-9.49Z" />
                <rect className="st2" x="1033.4" y="933.91" width="14.66" height="14.66" />
            </g>
        </svg>
    );
};

export default WhiteAlpacaSit;
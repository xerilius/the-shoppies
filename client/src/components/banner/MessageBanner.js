import React from 'react';
import './MessageBanner.css';


export default function MessageBanner({ message }) {
    return (
        <>
        { message.alert !== "" &&
            <div className="msg-banner">
                <div>{message.alert}</div>
            </div>
        }
        { message.error !== "" &&
            <div className="msg-banner">
                <div>{message.error}</div>
            </div>
        }
       </>
    );
}
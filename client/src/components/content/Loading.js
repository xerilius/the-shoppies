import React from 'react'
import './css/Loading.css'


export default function Loading() {
    return (
        <div className="loading-screen">
            <div className="loading">
                <i class="fas fa-circle-notch fa-spin fa-5x"></i>
            </div>
        </div>
    )
}
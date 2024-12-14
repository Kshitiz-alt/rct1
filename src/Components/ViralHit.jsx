// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../styles/viralhit.css'
//Accordian under playlists for your fav songs//
export default function ViralHit() {
    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                       
                    </div>
                </div>
            </div>
        </div>

    )
}

import React, { useState } from 'react'
import '../App.css'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import ReactImageMagnify from 'react-image-magnify'

const Card = () => {
    const [showOverlay, setShowOverlay] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [selectedCard, setSelectedCard] = useState(null)


    const cards = [{
            img: img1,
            title: "Automatic Traffic Counter & Classifier",
            content: "An Automatic Traffic Counter and Classifier (ATCC) is a system used in traffic monitoring and management to automatically count and classify vehicles passing through a specific point on a road or highway."
        },
        {
            img: img2,
            title: "Face Recognition System",
            content:"A face recognition system that identifies or verifies a person's identity by analyzing and mapping their facial features. It is widely used in security, authentication, and various consumer applications due to its non-invasive and efficient nature."
        },
        {
            img: img3,
            title: "Red Light Violation Detection",
            content: "Red Light Violation Detection (RLVD) is a system designed to automatically monitor and identify vehicles that run red lights at intersections. It is a part of Intelligent Traffic Management Systems aimed at improving road safety, enforcing traffic laws, and managing traffic flow efficiently."
        },
        {
            img: img4,
            title: "Incident Detection System",
            content:"VIDES (Video Incident Detection and Enforcement System) is an advanced traffic management solution that uses video-based technology to monitor, detect, and respond to traffic incidents and violations in real-time."
        },
        {
            img: img5,
            title: "Intrusion Detection System",
            content: "Intrusion Detection System (IDS) refers to a system designed to detect unauthorized entry or breach of a physical space, such as a building, facility, or restricted area."
        },
        {
            img: img6,
            title: "Automatic Numer Plate Recognition",
            content: "Automatic Number Plate Recognition (ANPR) technology utilizes optical character reading on images of vehicle license plates to extract the vehicle's registration details. An automated license plate recognition (ALPR) system employs various image processing methods to rapidly and autonomously detect vehicles in photos or live video feeds from one or multiple cameras."
        }
    ]
    return (
        <div className='cards'>
            {cards.map((card, idx) => {
                return (
                    <>
                        <div className="card" key={idx}>
                            <div className='img'>
                                <img src={card.img} alt="err" />
                            </div>
                            <h3>
                                {card.title}
                            </h3>
                            <button onClick={() => {
                                setShowOverlay(true);
                                setShowModal(true);
                                setSelectedCard(card);
                            }}>
                                View Details
                            </button>
                        </div>
                    </>
                )
            })}
            {showOverlay && <div className="overlay" onClick={() => {
                setShowOverlay(false);
                setShowModal(false);
                setSelectedCard(null);
            }}></div>}

            {showModal && (
                <div className="modal">
                    <div className='img'>
                    <ReactImageMagnify 
                        {...{
                            smallImage: {
                                alt: selectedCard.title,
                                isFluidWidth: true,
                                src: selectedCard.img,
                                style: { width: '100%', height: '100%', objectFit: 'cover' }
                            },
                            largeImage: {
                                src: selectedCard.img,
                                width: 1200,
                                height: 1800,
                            },
                            
                        }}
                    />
                    </div>
                    <div className="description">
                        <h2>
                            {selectedCard.title}
                        </h2>
                        <p>
                            {selectedCard.content}
                        </p>
                    </div>
                </div>

            )}
        </div>
    )
}

export default Card
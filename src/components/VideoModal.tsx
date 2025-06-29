import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './VideoModal.scss';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoSrc: string;
    title: string;
}

export function VideoModal({ isOpen, onClose, videoSrc, title }: VideoModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const portalRoot = document.getElementById('portal-root');
    if (!portalRoot) return null;

    return createPortal(
        <div className="video-modal-overlay" onClick={onClose}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="video-modal-header">
                    <h3>{title}</h3>
                    <button className="close-button" onClick={onClose}>
                        ×
                    </button>
                </div>
                <div className="video-container">
                    <video
                        controls
                        autoPlay
                        muted
                        className="modal-video"
                        key={videoSrc} // Force re-render when video changes
                    >
                        <source src={videoSrc} type="video/mp4" />
                        <source src={videoSrc} type="video/mov" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>,
        portalRoot
    );
} 
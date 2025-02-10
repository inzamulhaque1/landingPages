import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Hls from 'hls.js';

const VideoPlayer = () => {
    const { id } = useParams(); // Get the channel ID from the URL
    const [channel, setChannel] = useState(null);

    useEffect(() => {
        // Fetch the channel data based on the ID
        fetch('/Output.json')
            .then((response) => response.json())
            .then((data) => {
                const selectedChannel = data.find((channel) => channel.id === parseInt(id));
                setChannel(selectedChannel);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [id]);

    useEffect(() => {
        if (channel) {
            const videoElement = document.getElementById('video-player');
            
            // Check if HLS.js is supported
            if (Hls.isSupported() && videoElement) {
                const hls = new Hls();
                hls.loadSource(channel.url);
                hls.attachMedia(videoElement);

                // Cleanup HLS instance when component unmounts or URL changes
                return () => {
                    hls.destroy();
                };
            } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
                // For Safari (native HLS support)
                videoElement.src = channel.url;
            }
        }
    }, [channel]);

    return (
        <div className="p-4">
            {channel ? (
                <div>
                    <h1 className="text-2xl font-bold">{channel.name}</h1>
                    <p className="text-gray-600">{channel.category}</p>
                    <video
                        id="video-player"
                        controls
                        className="w-full mt-4 rounded-md"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default VideoPlayer;

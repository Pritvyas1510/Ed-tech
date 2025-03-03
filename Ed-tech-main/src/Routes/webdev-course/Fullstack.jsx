import React, { useState } from 'react';
import { fullstackRoadmap} from '../../../../lib/data';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Fullstack = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const playVideo = (videoLink) => {
    setSelectedVideo(videoLink);
  };

  return (
    <div className="flex">
      <aside className="w-64 bg-gray-100 p-4 h-screen overflow-scroll">
        <h2 className="text-xl font-bold mb-4 text-black">Backend</h2>
        <ul className="space-y-2">
          {fullstackRoadmap.map((item, index) => (
            <li key={index} className="mb-2">
              <button
                className="flex items-center justify-between w-full p-2 text-left text-gray-800 bg-white rounded-lg shadow hover:bg-gray-50"
                onClick={() => toggleDropdown(index)}
              >
                {item.mainTopic}
                {openIndex === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openIndex === index && (
                <ul className="mt-2 ml-4 space-y-1">
                  {item.subtopics.map((subtopic, subIndex) => (
                    <li key={subIndex} className="text-gray-700 text-sm cursor-pointer hover:underline" onClick={() => playVideo(subtopic.videoLink)}>
                      {subtopic.title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 p-4">
        {selectedVideo ? (
          <div>
            <iframe
              src={selectedVideo}
              title="Selected Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[600px] rounded-lg shadow-lg p-5"
            ></iframe>
          </div>
        ) : (
          <p className="text-gray-900 justify-self-center p-52 text-7xl ">Welcome to <span className='text-orange-500'>Ed</span> Tech</p>
        )}
      </main>
    </div>
  );
};

export default Fullstack;
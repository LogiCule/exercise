import React from "react";
import { ExternalLink } from "lucide-react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos?.length) {
    return (
      <div className="container mx-auto px-6 py-10">
        <div className="glass-medium rounded-lg p-8 text-center">
          <p className="text-foreground/60">Loading videos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="mb-10">
        <h2 className="text-4xl font-bold mb-2 text-foreground">
          Video Tutorials
        </h2>
        <p className="text-foreground/60">Watch <span className="capitalize text-gold">{name}</span> exercise demonstrations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exerciseVideos?.slice(0, 6).map((video, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="glass-medium rounded-lg overflow-hidden group hover:shadow-soft transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative aspect-video overflow-hidden bg-secondary">
              <img
                src={video.video.thumbnails[0]?.url}
                alt={video?.video?.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* External link badge */}
              <div className="absolute top-3 right-3 glass-medium p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="h-4 w-4 text-foreground" />
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-gold transition-colors">
                {video.video.title}
              </h4>
              <p className="text-foreground/50 text-sm">
                {video.video.channelName}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;

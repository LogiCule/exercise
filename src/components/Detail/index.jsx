import React, { useState } from "react";
import { Target, Activity, Dumbbell } from "lucide-react";
import { useExerciseImage } from "@/hooks/useExerciseImage";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, id, name, target, equipment } = exerciseDetail;
  const [imageError, setImageError] = useState(false);

  // Fetch the image with proper authentication using the Image Service endpoint
  const { data: imageUrl, isLoading: imageLoading } = useExerciseImage(id);

  const details = [
    {
      icon: Target,
      label: "Body Part",
      value: bodyPart,
    },
    {
      icon: Activity,
      label: "Target Muscle",
      value: target,
    },
    {
      icon: Dumbbell,
      label: "Equipment",
      value: equipment,
    },
  ];

  const showPlaceholder = imageError || (!imageUrl && !imageLoading);

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Exercise GIF */}
        <div className="glass-medium rounded-xl p-8 lg:sticky lg:top-24 border-2 border-white/20">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary">
            {imageLoading ? (
              // Loading state
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 mx-auto mb-4 text-foreground/20 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <p className="text-foreground/40 font-medium">Loading visual guide...</p>
                </div>
              </div>
            ) : !showPlaceholder && imageUrl ? (
              <img
                src={imageUrl}
                alt={name}
                loading="lazy"
                onError={() => setImageError(true)}
                className="w-full h-full object-contain"
              />
            ) : (
              // Placeholder for missing GIF
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
                <div className="text-center p-8">
                  <svg className="w-24 h-24 mx-auto mb-4 text-foreground/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-foreground/40 font-medium">Visual guide unavailable</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Exercise Details */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="w-16 h-0.5 bg-gradient-gold" />
            <h1 className="capitalize text-foreground">
              {name}
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed font-light">
              Exercise keeps you strong and healthy. <span className="capitalize font-medium text-foreground">{name}</span> is one of the best exercises to target your <span className="capitalize font-medium text-gold">{target}</span> muscle group.
            </p>
          </div>

          {/* Info Cards */}
          <div className="space-y-4 pt-4">
            {details.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <div
                  key={detail.label}
                  className="glass-medium rounded-lg p-6 flex items-center gap-6 hover:shadow-soft transition-all duration-300 animate-fade-in border-2 border-white/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 rounded-lg bg-gradient-gold">
                    <Icon className="h-6 w-6 text-background" />
                  </div>
                  <div>
                    <p className="text-foreground/50 text-sm font-medium mb-2 uppercase tracking-wider">{detail.label}</p>
                    <p className="text-2xl font-semibold capitalize text-foreground tracking-tight">{detail.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

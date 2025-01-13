import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useTranslations } from '@/hooks/useTranslations';
import { MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const MapSection = () => {
  const { t } = useTranslations();
  const { toast } = useToast();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [location, setLocation] = useState<[number, number] | null>(null);
  const [locationError, setLocationError] = useState<string>('');
  const [webGLError, setWebGLError] = useState(false);

  useEffect(() => {
    if (!mapContainer.current) return;

    try {
      // Check for WebGL support
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (!gl) {
        setWebGLError(true);
        toast({
          title: t('webgl_error_title') || 'WebGL Error',
          description: t('webgl_error_description') || 'Your browser does not support WebGL, which is required for the map.',
          variant: 'destructive',
        });
        return;
      }

      // Initialize map
      mapboxgl.accessToken = 'pk.eyJ1IjoidnRiZXJiZWhhIiwiYSI6ImNscnhwbmJwbzE3NHIya3A2ZmFxNmxvbTIifQ.5QeK5_AMedvQVPd0TI4Prg';
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        projection: 'globe',
        zoom: 1.5,
        center: [30, 15],
        pitch: 45,
        antialias: true,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Get user location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { longitude, latitude } = position.coords;
            setLocation([longitude, latitude]);

            if (map.current) {
              // Add marker at user location
              new mapboxgl.Marker()
                .setLngLat([longitude, latitude])
                .addTo(map.current);

              // Fly to location
              map.current.flyTo({
                center: [longitude, latitude],
                zoom: 9,
                duration: 3000,
              });
            }
          },
          (error) => {
            console.error('Error getting location:', error);
            setLocationError(t('location_error') || 'Could not get your location');
          }
        );
      }

      // Add atmosphere and fog effects
      map.current.on('style.load', () => {
        map.current?.setFog({
          color: 'rgb(186, 210, 235)',
          'high-color': 'rgb(36, 92, 223)',
          'horizon-blend': 0.02,
          'space-color': 'rgb(11, 11, 25)',
          'star-intensity': 0.6
        });
      });

    } catch (error) {
      console.error('Map initialization error:', error);
      setWebGLError(true);
      toast({
        title: t('map_error_title') || 'Map Error',
        description: t('map_error_description') || 'There was an error loading the map.',
        variant: 'destructive',
      });
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [t, toast]);

  if (webGLError) {
    return (
      <div className="relative w-full h-full min-h-[300px] bg-card rounded-lg overflow-hidden flex items-center justify-center">
        <div className="text-center p-6">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">{t('map_error_title') || 'Map Unavailable'}</h3>
          <p className="text-gray-400">
            {t('map_error_description') || 'The map could not be loaded due to technical limitations.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[300px] bg-card rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      {locationError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-card p-4 rounded-lg flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-500" />
            <span>{locationError}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapSection;
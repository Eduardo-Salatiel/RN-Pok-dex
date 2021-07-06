import React, { useState } from "react";
import {
  ActivityIndicator,
  Animated,
  ImageErrorEventData,
  ImageStyle,
  NativeSyntheticEvent,
  StyleProp,
  View,
} from "react-native";
import { useAnimation } from "../hooks/useAnimation";

interface Props {
  uri: string;
  style: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style = {} }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { fadeIn, opacity } = useAnimation();

  const handleLoad = () => {
    setIsLoading(false);
    fadeIn(400);
  };

  const handleError = (err: NativeSyntheticEvent<ImageErrorEventData>) => {
    setIsLoading(false);
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        ...(style as any),
      }}
    >
      {isLoading && (
        <ActivityIndicator
          style={{ position: "absolute" }}
          color="red"
          size={30}
        />
      )}
      <Animated.Image
        source={{ uri }}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};

import Tweet from "../../components/Tweet";
import React from "react";
import { Text } from "react-native";
import tweets from "../../assets/data/tweets";
import { useSearchParams } from "expo-router";
export default function TweetScreen() {
  const { id } = useSearchParams();
  const tweet = tweets.find((item) => item?.id === id);
  if (!tweet) {
    return <Text>Tweet not found</Text>;
  }
  return <Tweet tweet={tweet} />;
}

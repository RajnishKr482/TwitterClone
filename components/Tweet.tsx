import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { TweetType } from "../types/types";
import { Entypo } from "@expo/vector-icons";
import IconButton from "./IconButton";
import { Link } from "expo-router";
type TweetProps = {
  tweet: TweetType;
};
const Tweet = (props: TweetProps) => {
  const { tweet } = props;
  return (
    <Link href={`/${tweet?.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: tweet?.user?.image }} style={styles.userImage} />
        <View style={styles.mainContainer}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={styles.namw}>{tweet?.user?.name}</Text>
            <Text style={styles.username}>{tweet?.user?.username} 2h</Text>
            <Entypo
              name="dots-three-horizontal"
              size={24}
              color="black"
              style={{
                marginLeft: "auto",
              }}
            />
          </View>
          <Text style={styles.content}>{tweet?.content}</Text>
          {tweet.image && (
            <Image source={{ uri: tweet.image }} style={styles.image} />
          )}
          <View style={styles.footer}>
            <IconButton icon="comment" text={tweet?.numberOfComments} />
            <IconButton icon="retweet" text={tweet?.numberOfRetweets} />
            <IconButton icon="heart" text={tweet?.numberOfComments} />
            <IconButton icon="chart" text={tweet?.impressions || 0} />
            <IconButton icon="share-apple" />
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgrey",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  namw: {
    fontWeight: "500",
  },
  username: {
    color: "grey",
    marginLeft: 5,
  },
  content: {
    lineHeight: 20,
    marginTop: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginTop: 10,
    borderRadius: 15,
  },
  footer: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-between",
  },
});
export default Tweet;

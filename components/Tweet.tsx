import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TweetType } from "../types/types";
import { Entypo, EvilIcons } from "@expo/vector-icons";
type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  text?: string | number;
};
const IconButton = ({ icon, text }: IconButtonProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <EvilIcons name={icon} size={22} color={"grey"} />
      <Text
        style={{
          fontSize: 12,
        }}
      >
        {text}
      </Text>
    </View>
  );
};
type TweetProps = {
  tweet: TweetType;
};
const Tweet = (props: TweetProps) => {
  const { tweet } = props;
  return (
    <View style={styles.container}>
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
    </View>
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

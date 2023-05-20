import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TweetType } from "../types/types";

type TweetProps = {
  tweet: TweetType;
};
const Tweet = (props: TweetProps) => {
  const { tweet } = props;
  return (
    <View style={styles.container}>
      <Image src={tweet?.user?.image} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <Text style={styles.namw}>{tweet?.user?.name}</Text>
        <Text style={styles.content}>{tweet?.content}</Text>
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
  content: {
    lineHeight: 20,
    marginTop: 1,
  },
});
export default Tweet;

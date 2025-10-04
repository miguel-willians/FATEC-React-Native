import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: "#0ea5e9", // sky-600
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.997 }],
  },
  text: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
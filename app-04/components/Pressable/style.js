import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonPressed: {
    backgroundColor: "#0056b3", // cor mais escura quando pressionado
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
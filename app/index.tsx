import React, { useState } from "react";
import { Button, StyleSheet, Switch, Text, TextInput, View } from "react-native";

const PaymentScreen = () => {
  const [isInternational, setIsInternational] = useState(false);

  const [form, setForm] = useState({
    recipientName: "",
    accountNumber: "",
    amount: "",
    iban: "",
    swift: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    if (isInternational) {
      console.log("International Payment", form);
    } else {
      console.log("Domestic Payment", form);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.toggleRow}>
        <Text style={styles.label}>Domestic</Text>
        <Switch
          value={isInternational}
          onValueChange={setIsInternational}
        />
        <Text style={styles.label}>International</Text>
      </View>

      <Text style={styles.title}>
        {isInternational ? "International Transfer" : "Domestic Transfer"}
      </Text>

      {/* Common fields */}
      <TextInput
        placeholder="Recipient Name"
        style={styles.input}
        value={form.recipientName}
        onChangeText={(text) => handleChange("recipientName", text)}
      />

      <TextInput
        placeholder="Account Number"
        style={styles.input}
        keyboardType="numeric"
        value={form.accountNumber}
        onChangeText={(text) => handleChange("accountNumber", text)}
      />

      <TextInput
        placeholder="Amount"
        style={styles.input}
        keyboardType="numeric"
        value={form.amount}
        onChangeText={(text) => handleChange("amount", text)}
      />

      {/* Extra fields for International */}
      {isInternational && (
        <>
          <TextInput
            placeholder="IBAN (Max 34 chars)"
            style={styles.input}
            maxLength={34}
            value={form.iban}
            onChangeText={(text) => handleChange("iban", text)}
          />
          <TextInput
            placeholder="SWIFT Code (e.g. AAAA-BB-CC-12)"
            style={styles.input}
            value={form.swift}
            onChangeText={(text) => handleChange("swift", text)}
          />
        </>
      )}

      <Button title="Send Payment" onPress={handleSubmit} />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
});
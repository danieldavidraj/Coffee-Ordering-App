import React, { useState } from "react";
import { Button, Text, StyleSheet, View, Image } from "react-native";
import Counter from "react-native-counters";
import Checkbox from 'expo-checkbox';

const App = () => {
  const [chocolate, addChocolate] = useState(false);
  const [whippedCream, addwhippedCream] = useState(false);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const onQuantityChange = (number, type) => {
    setQuantity(number);
  };
  
  const Order = () => {
    var calPrice = (quantity * 4) + (1 * chocolate * quantity) + (0.5 * whippedCream * quantity); 
    setPrice(calPrice);
    if(calPrice)
      window.alert('Order placed\nPrice: $' + calPrice)
    else
      window.alert('Please Order Something')
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.TopBanner}>
        <Text style={styles.titleText}>Coffee Ordering App</Text>
      </View>
      
      <Image 
        style={styles.logo}
        source={require('./assets/coffee.jpg')} 
      />

      <Counter start={0} onChange={onQuantityChange} />
      
      <View style={styles.checkboxContainer1}>
        <Checkbox
          value={chocolate}
          onValueChange={addChocolate}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Add Chocolate</Text>
      </View>

      <View style={styles.checkboxContainer2}>
        <Checkbox
          value={whippedCream}
          onValueChange={addwhippedCream}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Add whipped cream</Text>
      </View>
      
      <View style={styles.TextContainer}>
        <Text>Coffee: {quantity} x 4 = {quantity * 4}</Text>
        <Text>Chocolate: {quantity} x 1 = { 1 * chocolate * quantity }</Text>
        <Text>whipped cream: {quantity} x 0.5 = { 0.5 * whippedCream * quantity }</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={Order}
          title="Order"
        />
      </View>

      <View style={styles.OrderContainer}>
        <Text>Total Price: ${price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  TopBanner: {
    backgroundColor: "steelblue",
    width: "100%",
    textAlign: "center",
    padding: 10,
    marginTop: 5
  },
  titleText: {
    fontFamily: "Arial",
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff"
  },
  checkboxContainer1: {
    flexDirection: "row",
    marginTop: 20,
  },
  checkboxContainer2: {
    flexDirection: "row",
  },
  buttonContainer: {
    marginTop: 20
  },
  TextContainer: {
    marginTop: 10,
    padding: 10,
    border: "2px solid #2196f3"
  },
  OrderContainer: {
    marginVertical: 20,
    textAlign: "center",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  logo: {
    flex: 1,
    height: 50,
    width: 400,
    alignSelf: "center",
    margin: 20
  },
});

export default App;
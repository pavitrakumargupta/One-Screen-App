import React, { useState } from 'react';
import { View, StyleSheet,ScrollView,SafeAreaView,StatusBar,Image } from 'react-native';
import { Appbar, TextInput, Button, List } from 'react-native-paper';

const App = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([
    { id: 1, name: 'Vegetables', icon: 'food-apple' },
    { id: 2, name: 'Fruit', icon: 'food-grape' },
    { id: 3, name: 'Grocery', icon: 'cart' },
  ]);

  const handleAddItem = () => {
    if (text) {
      setItems([{ id: items.length + 1, name: text, icon: 'folder' },...items]);
      setText('');
    }
  };

  const handleClearItems = () => {
    setItems([]);
  };

  return (
    <View style={styles.container}>
      <Appbar>
    <Image style={styles.icon}  source={{uri:"https://cdn-icons-png.flaticon.com/512/3724/3724788.png"}}/>

        <Appbar.Content title="One-Screen App" />
      </Appbar>

      <TextInput
        label="Enter Text"
        value={text}
        onChangeText={(inputText) => setText(inputText)}
        style={styles.input}
      />

      <Button mode="contained" onPress={handleAddItem} style={styles.button}>
        Add Item
      </Button>

      <Button mode="outlined" onPress={handleClearItems} style={styles.button}>
        Clear Items
      </Button>

      <Image style={styles.image}  source={{uri:"https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0="}}/>
    <SafeAreaView style={styles.scroll}>
      <ScrollView>
      <List.Section style={styles.list}>
        <List.Subheader>List of Items</List.Subheader>
        {items.map((item) => (
          <List.Item
            key={item.id}
            title={item.name}
            left={() => <List.Icon icon={item.icon} />}
          />
        ))}
      </List.Section>
      </ScrollView>
    </SafeAreaView>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 16,
  },
  icon:{
    height:50,
    width:50,
    marginRight:50
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginBottom: 16,
  },
  list: {
    flex: 1,
  },
  scroll:{
    paddingBottom: 450
  },
  image:{
    width:360,
    height:200,
    alignSelf:"center"
  }
});

export default App;

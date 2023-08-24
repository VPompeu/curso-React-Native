import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";

export function CreateButton({onCreate}){

    const[text, setText] = useState("aaaa");

    function hadlePress(){
        if(onCreate) onCreate(text);
        setText("");
      }
      return(
        <View style={styles.conteiner}>
            <TextInput style={styles.input} value={text} onChangeText={(value) => console.log(value)}/>
             <Pressable style={styles.btn}onPress={hadlePress}>
                <Text style={styles.text}>Criar</Text>
             </Pressable>
        </View>
      )
}

const styles = StyleSheet.create({
    conteiner:{
        flexDirection: "row",
        gap: 8,
    },

    input:{
        width: 200,
        backgroundColor: '#333',
        borderRadius: 3,
        borderWidth: 2,
        borderColor: "#777",
        borderStyle: "solid",
        color:'white',
    },

    btn:{
        backgroundColor: '#232323',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 8,
    },

    text:{
      color: 'white',
      textTransform: "uppercase",
      fontWeight: "600",
      fontSize: 24,
    }
  });

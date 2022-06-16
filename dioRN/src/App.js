/* eslint-disable prettier/prettier */
import React from 'react';
import {View,
    Image,
    Text,
    Pressable,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Linking
    } from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';

const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/101333663?v=4';
const urlProfileGithub = 'https://github.com/vinicpires';

const App = () => {
    const handlePressGoToGithub = async ()=>{
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlProfileGithub);
        if (res) {
            console.log('Link aprovado');
            console.log('Abrindo o link....');
            await Linking.openURL(urlProfileGithub);
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
            <View style={style.content}>
                <Image accessibilityLabel="Vinicius de óculos"
                style={style.avatar} 
                source={{uri: imageProfileGitHub}} />

                <Text accessibilityLabel="Nome: Vinicius Pires" style={[style.defaultText, style.name]}>Vinicius Pires</Text>
                <Text style={[style.defaultText, style.nickname]}>vinicpires</Text>
                <Text style={[style.defaultText, style.descripption]}>Estudante de Análise e desenvolvimento de Sistemas FATEC SCS</Text>

                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                       <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGitHub,
        flex: 1, //expandir para tela inteira
        justifyContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'row',   
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGitHub,
    },
    name: {
        marginTop: 20,
        fontSize:24,
        fontWeight: 'bold',
    },
    nickname: {
        fontSize:18,
        color: colorDarkFontGitHub,
    },
    descripption: {
        fontSize:14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: colorDarkFontGitHub,
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },
    textButton: {
        fontSize:14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
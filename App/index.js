// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const stories = [
    { id: '1', title: 'The Tortoise and the Hare', content: 'A short story of The Tortoise and The Hare...' },
    { id: '2', title: 'The Boy Who Cried Wolf', content: 'A short story of The Boy Who Cried Wolf...' },
    { id: '3', title: 'The Ugly Duckling', content: 'A short story of The Ugly Duckling...' },
    { id: '4', title: 'Cinderella', content: 'A short story of Cinderella...' },
    { id: '5', title: 'Little Red Riding Hood', content: 'A short story of Little Red Riding Hood...' },
];

const StoryList = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.storyContainer} onPress={() => navigation.navigate('Story Detail', { story: item })}>
            <Text style={styles.storyTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={stories}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const StoryDetail = ({ route }) => {
    const { story } = route.params;

    return (
        <SafeAreaView style={styles.detailContainer}>
            <Text style={styles.title}>{story.title}</Text>
            <Text style={styles.content}>{story.content}</Text>
        </SafeAreaView>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaView style={styles.container}>
                <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#333'}, headerTintColor: '#fff'}}>
                    <Stack.Screen name="Bedtime Stories" component={StoryList} />
                    <Stack.Screen name="Story Detail" component={StoryDetail} />
                </Stack.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    list: {
        alignItems: 'center',
    },
    storyContainer: {
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
        width: '90%',
    },
    storyTitle: {
        color: '#fff',
        fontSize: 20,
    },
    detailContainer: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 10,
    },
    content: {
        color: '#ccc',
        fontSize: 18,
    },
});
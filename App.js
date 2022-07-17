import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MovieList from './src/screens/movie-list'
import NavigationStack from './src/navigation/navigation'
export default function App() {
	return (
		<NavigationContainer>
			<NavigationStack />
		</NavigationContainer>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
})

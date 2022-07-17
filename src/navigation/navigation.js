import React from 'react'
import {
	ViewProps,
	TextProps,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MovieList from '../screens/movie-list'
import MovieDetail from '../screens/movie-detail'
import CharacterDetail from '../screens/character-detail'
import { navigationScreen } from '../constant/constant'
const Stack = createNativeStackNavigator()
export default function NavigationStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name={navigationScreen.home} component={MovieList} />
			<Stack.Screen name={navigationScreen.detail} component={MovieDetail} />
			<Stack.Screen
				name={navigationScreen.characterDetail}
				component={CharacterDetail}
			/>
		</Stack.Navigator>
	)
}

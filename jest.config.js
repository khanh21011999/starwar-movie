const config = {
	verbose: true,
	preset: 'react-native',
	transformIgnorePatterns: [
		'node_modules/(?!victory-native|(jest-)?viewpager|enzyme|react-native|@expo|@react-native-community|react-native-device-info|@babel|react-native-mov-to-mp4|@react-navigation)/',
	],
	setupFiles: ['./jest.setup.js'],
	// setupFilesAfterEnv: ['./setup-test.js'],
	// testEnvironment: 'enzyme',
	// testEnvironmentOptions: {
	// 	enzymeAdapter: 'react17',
	// },
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{js,jsx}'],
	maxWorkers: '100%',
	// transform: {
	// 	'^.+\\.svg$': '<rootDir>/svgTransform.js',
	// },
}

module.exports = config

import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utility functions tests', () => {
	// test for getFullYear
	test('getFullYear returns the correct year', () => {
		const currentYear = new Date().getFullYear();
		expect(getFullYear()).toBe(currentYear);
	});

	// Test for getFooterCopy
	test('getFooterCopy return the correct string when argument is True', () => {
		expect(getFooterCopy(true)).toBe('Holberton School');
	});

	test('getFooterCopy return the correct string when argument is False', () => {
		expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
	});

	// Test for getLatestNotification
	test('getLatestNotification return the correct string', () => {
		expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
	});
})
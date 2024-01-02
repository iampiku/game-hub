export default function useLocalStorage<T>(key: string) {
	function setItem(value: T) {
		try {
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (e) {
			console.error(e);
		}
	}
	function getItem() {
		try {
			const value = window.localStorage.getItem(key);
			return value ? (JSON.parse(value) as T) : null;
		} catch (e) {
			console.error(e);
			return null;
		}
	}
	function removeItem() {
		try {
			window.localStorage.removeItem(key);
		} catch (e) {
			console.error(e);
		}
	}
	return {
		setItem,
		getItem,
		removeItem,
	};
}

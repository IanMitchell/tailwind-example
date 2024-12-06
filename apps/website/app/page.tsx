async function example(): Promise<number> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(7);
		}, 1000);
	});
}

export default async function Home() {
	const value = await example();

	return <div>lucky number {value}</div>;
}

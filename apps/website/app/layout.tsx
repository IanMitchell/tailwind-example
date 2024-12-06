import "./styles.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="min-h-full font-normal">
			<body className="flex min-h-screen flex-col bg-[#F5F5FA]">
				{children}
			</body>
		</html>
	);
}

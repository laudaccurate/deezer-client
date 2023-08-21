import React from "react";
import { Center, Loader, LoadingOverlay } from "@mantine/core";
import { useRouter } from "next/router";

interface LoaderContent {
  pageLoading: boolean;
  setPageLoading: (state: boolean) => void;
}

export const LoadingContext = React.createContext<LoaderContent>({pageLoading: true, setPageLoading: ()=> {}});
const BouncingLogo = () => (
	<div className="loader-main">
		<div className="loader-component spaced">
			<div className="bouncing-logo">
				<Center>
					<Loader variant="bars" size="lg" />
				</Center>
			</div>

			<span className="loader-text">Getting things ready for you...</span>
		</div>
	</div>
);

const LoadingProvider: React.FC<{children: any}> = ({ children }) => {
	const [pageLoading, setPageLoading] = React.useState(true);
	const [loaderOpacity, setLoaderOpacity] = React.useState(1);
	const router = useRouter();
	const handleRouteChangeStart = () => setPageLoading(true);
	const handleRouteChangeComplete = () => setPageLoading(false);

	React.useEffect(() => {
		setTimeout(() => {
			setLoaderOpacity(0.8);
			setPageLoading(false);
		}, 500);

		router.events.on("routeChangeStart", handleRouteChangeStart);
		router.events.on("routeChangeComplete", handleRouteChangeComplete);
		router.events.on("routeChangeError", handleRouteChangeComplete);
		return () => {
			router.events.off("routeChangeStart", handleRouteChangeStart);
			router.events.off("routeChangeComplete", handleRouteChangeComplete);
			router.events.off("routeChangeError", handleRouteChangeComplete);
		};
	}, [router.events]);

	const Loader = React.useMemo(
		() => ({
			pageLoading,
			setPageLoading,
		}),
		[pageLoading]
	);

	return (
		<LoadingContext.Provider value={{pageLoading, setPageLoading}}>
			<LoadingOverlay
				overlayOpacity={loaderOpacity}
				transitionDuration={500}
				loader={
					<Center>
						<BouncingLogo />
					</Center>
				}
				visible={pageLoading}
			/>
			{loaderOpacity === 1 ? null : children}
		</LoadingContext.Provider>
	);
}


export default LoadingProvider;
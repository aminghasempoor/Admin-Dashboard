import SvgLoading from "@/core/svgs/SvgLoading";

const LoadingHardPage = ({ children, loading, icon = null, width = 200, height = 200, label = '' }) => {
    if (!loading) return <>{children}</>;

    return (
        <>
            <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
                <div className="flex flex-col items-center space-y-2">
                    {/* Loading Image with custom animation */}
                    <div
                        className="animate-load"
                        style={{ width: `${width}px`, height: `${height}px` }}
                    >
                        {icon ? (
                            <div className="text-primary" style={{ width: `${width}px`, height: `${height}px` }}>
                                {icon}
                            </div>
                        ) : (
                            <SvgLoading width={width} height={height} />
                        )}
                    </div>
                    <p className="text-primary text-sm">{label}</p>
                </div>
            </div>
            {children}
        </>
    );
};

export default LoadingHardPage;


const LoadingSpinner = ({ width = 50, height = 50 }) => {
    return (
        <div
            className="animate-spin rounded-full border-t-4 border-green-800 border-solid"
            style={{ width: `${width}px`, height: `${height}px` }}
        />
    );
};

const LoadingHardPage = ({ children, loading, icon = null, width = 100, height = 100, label = '' }) => {
    return (
        <>
            {loading && (
                <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center">
                    <div className="flex flex-col items-center space-y-2">
                        {/* Icon or Spinner */}
                        {icon ? (
                            <div className="text-green-800" style={{ width: `${width}px`, height: `${height}px` }}>
                                {icon}
                            </div>
                        ) : (
                            <LoadingSpinner width={width} height={height} />
                        )}

                        {/* Optional Label */}
                        {label && (
                            <p className="text-green-400 text-lg pt-3">{label}</p>
                        )}
                    </div>
                </div>
            )}

            {children}
        </>
    );
};

export default LoadingHardPage;

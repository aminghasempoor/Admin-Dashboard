const CenterLayout = (props) => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full py-3">
            {props.children}
        </div>
    );
};

export default CenterLayout;

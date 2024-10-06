const FullPageLayout = (props) => {
    return (
        <div className={"w-full h-full"}>
            {props.children}
        </div>
    );
};

export default FullPageLayout;

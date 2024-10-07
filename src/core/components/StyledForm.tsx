const StyledForm = ({ children, ...props }) => {
    return (
        <form className="space-y-4 p-4 w-full max-w-lg rounded-md" {...props}>
            {children}
        </form>
    );
};

export default StyledForm;

const Container = ({children}) => {
    return (
    <div className="w-full border border-slate-500 rounded-md p-5">
    {children}
    </div>
    );
}

const ContainerHead = ({children}) => {
    return (
    <p className="text-3xl mb-5">
        {children}
    </p>
    );
}

/*    const ContainerBody = ({children}) => {
        return (
        <div className="">
            {children}
        </div>
        );
    }
*/

export {Container,ContainerHead}; //ContainerBody};

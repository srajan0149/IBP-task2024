interface props {
    children:any;
}

const Container = ({children}:props) => {
    return (
    <div className="w-full bg-gray-50 border border-slate-500 rounded-md p-5 dark:bg-slate-800">
    {children}
    </div>
    );
}

const ContainerHead = ({children}:props) => {
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

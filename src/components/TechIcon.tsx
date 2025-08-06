// it is used for removing redundant repetition of classed in icons of about section. 
const TechIcon = ({component}:{component:React.ElementType})=>{
    // Capitalize so that it can be used as a React component
    const Component  = component;
    return (
        <Component className="size-10"/>
    );
}
export default TechIcon;